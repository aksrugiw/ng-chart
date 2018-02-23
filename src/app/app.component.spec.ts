import { TestBed, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { ChartsModule } from 'ng4-charts/ng4-charts';
import { OrderByPipe } from './order-by.pipe';
import { DataService } from './data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PanelComponent,
        OrderByPipe
      ],
      imports: [
        HttpClientModule,
        ChartsModule
      ],
      providers: [
        DataService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render two panel component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-panel') !== null).toBe(true);
  }));
});
