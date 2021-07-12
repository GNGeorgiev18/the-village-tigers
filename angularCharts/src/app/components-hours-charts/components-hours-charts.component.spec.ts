import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsHoursChartsComponent } from './components-hours-charts.component';

describe('ComponentsHoursChartsComponent', () => {
  let component: ComponentsHoursChartsComponent;
  let fixture: ComponentFixture<ComponentsHoursChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsHoursChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsHoursChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
