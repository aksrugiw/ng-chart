import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../data.service';
import { Chart } from 'chart.js';

import { OrderByPipe } from './../order-by.pipe';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() canvasId: string = 'canvas';
  chart: Chart;
  responseData = [];
  tableData = [];
  data = {
    values: [],
    names: []
  };
  isDetails = false;
  detailsInfo = '';
  sortKey = '';
  sortAsc = false;
  isLoading = true;
  iconSort = {
    name: 'fa-sort',
    value: 'fa-sort',
    pvalue: 'fa-sort'
  };

  constructor(private _dataService: DataService) {}

  ngOnInit() {
     this.fetchDataFromServer();
     this.prepareData();
     this.drawChart();
  }

  fetchDataFromServer() {
    this._dataService.fetchMockData()
    .subscribe(response => {
      this.responseData = Object.keys(response).map((k) => response[k]);
      this.tableData = this.responseData;
      this.isLoading = false;
    });  
  }

  reloadData() {
    this.fetchDataFromServer();
    this.prepareData();
    this.drawChart();
  }

  prepareData() {
    for(let i=0; i<this.responseData.length; i++) {
      this.data.values.push(this.responseData[i].value);
      this.data.names.push(this.responseData[i].name);
    }
  }

  drawChart() {
    let preparedData = {
      datasets: [
        { 
          data: this.data.values,
          borderColor: [
            "#6dbcbe", 
            "#50a5e8", 
            "#f9cb62",
            "#6d45be", 
            "#f34b62",
            "#20a5e2", 
            "#f9aa62",
            "#44cb62",
            "#f78c62",
            "#ff03a0",
          ],
          backgroundColor: [
            "#6dbcbe", 
            "#50a5e8", 
            "#f9cb62",
            "#6d45be", 
            "#f34b62",
            "#20a5e2", 
            "#f9aa62",
            "#44cb62",
            "#f78c62",
            "#ff03a0",
          ],
        }
      ],
      labels: this.data.names
    };
    let ctx = document.getElementById(this.canvasId);
    this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: preparedData,
        options: {
          onClick: (e) => {
            var activePoints = this.chart.getElementsAtEvent(e);
            this.detailsInfo = this.chart.data.labels[activePoints[0]._index];
            this.tableData = this.responseData[activePoints[0]._index].data;
            this.isDetails = true;
            this.sortReset();
            }
          }
    });
  }

  backFromDetails() {
    this.isDetails = false;
    this.tableData = this.responseData;
    this.sortReset();
  }

  sortTable(sortBy) {
    this.sortReset();
    this.sortKey = sortBy;
    this.sortAsc = !this.sortAsc;
    
    this.iconSort[sortBy] = this.sortAsc ? 'fa-sort-up' : 'fa-sort-down';
  }

  sortReset() {
    this.iconSort = {
      name: 'fa-sort',
      value: 'fa-sort',
      pvalue: 'fa-sort'
    };
    this.sortKey = '';
  }

}
