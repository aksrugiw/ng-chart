import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PanelComponent } from './panel.component';
import { OrderByPipe } from '.././order-by.pipe';
import { ChartsModule } from 'ng4-charts/ng4-charts';
import { DataService } from '.././data.service';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule, HttpClientModule],
      declarations: [ 
        PanelComponent,
        OrderByPipe
       ],
      providers: [DataService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
