import { Component } from '@angular/core';

import { PanelComponent } from './panel/panel.component';


@Component({
  selector: 'app-root',
  template: `
            <app-panel ></app-panel>
            <app-panel ></app-panel>
            `
})
export class AppComponent {
  
}
