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
  @Input() data;
  chart: Chart;
  responseData = [];
  tableData = [];
  parsedData = {
    values: [],
    names: []
  };
  isDetails = false;
  detailsInfo = '';
  sortKey = '';
  sortAsc = false;
  isLoading = true;
  isError = false;
  iconSort = {
    name: 'fa-sort',
    value: 'fa-sort',
    pvalue: 'fa-sort'
  };
  chartOptions = {
    responsive: true
  };

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.fetchDataFromServer();
  }

  fetchDataFromServer() {
    this._dataService.fetchMockData()
    .subscribe(response => {
      this.responseData = response;
      this.tableData = this.responseData;
      this.isLoading = false;
      this.prepareData();
    }, error => {
      this.isError = true;
    });
  }

  reloadData() {
    this.isLoading = true;
    this.fetchDataFromServer();
  }

  prepareData() {
    let tempData = {
      values: [],
      names: []
    };
    for(let i=0; i<this.responseData.length; i++) {
      tempData.values.push(this.responseData[i].value);
      tempData.names.push(this.responseData[i].name);
    }
    this.parsedData = tempData;
  }

  onChartClick(e) {
    let activePoints = e.active;
    this.detailsInfo = this.parsedData.names[activePoints[0]._index];
    this.tableData = this.responseData[activePoints[0]._index].data;
    this.isDetails = true;
    this.sortReset();
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
