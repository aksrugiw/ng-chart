import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../data.service';
import { Chart } from 'chart.js';

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

  constructor(private _dataService: DataService) {}

  ngOnInit() {
     this.fetchDataFromServer();
     this.tableData = this.responseData;
     this.prepareData(this.responseData);
     this.drawChart();
  }

  fetchDataFromServer() {
    this._dataService.fetchMockData()
    .subscribe(response => {
      this.responseData = Object.keys(response).map((k) => response[k]);
    });  
  }

  reloadData() {
    this.fetchDataFromServer();
    this.tableData = this.responseData;
    this.prepareData(this.responseData);
    this.drawChart();
  }

  prepareData(data) {
    for(let i=0; i<data.length; i++) {
      this.data.values.push(data[i].value);
      this.data.names.push(data[i].name);
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
            }
          }
    });
  }

  backFromDetails() {
    this.isDetails = false;
    this.tableData = this.responseData;
  }

}
