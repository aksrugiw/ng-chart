import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.fetchData()
      .subscribe(response => {
        console.log(response);
      })
  }
}
