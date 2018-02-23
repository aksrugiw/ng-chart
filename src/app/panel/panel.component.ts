import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() canvasId: string;
  chart;
  responseData = [];
  tableData = [];
  data = {
    values: [],
    names: []
  };

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    let data = [];
    
    this._dataService.fetchData()
      .subscribe(response => {
        this.responseData = Object.keys(response).map((k) => response[k]);
        this.tableData = this.responseData;
        this.prepareData(this.responseData);
        this.drawChart(this.data);
      });
  }

  prepareData(data) {
    for(let i=0; i<data.length; i++) {
      this.data.values.push(data[i].value);
      this.data.names.push(data[i].name);
    }
  }

  drawChart(data) {
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
    this.chart = new Chart(this.canvasId, {
        type: 'doughnut',
        data: preparedData,
        options: {
          onClick: (e) => {
            var activePoints = this.chart.getElementsAtEvent(e);
            // var label = this.chart.data.labels[activePoints[0]._index];
            // var value = this.chart.data.datasets[activePoints[0]._datasetIndex].data[activePoints[0]._index];
            // console.log(activePoints[0]._index);
            this.tableData = this.responseData[activePoints[0]._index].data;
            }
          }
    });
  }

}
