import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDatesChartsComponent } from './components-dates-charts.component';

describe('ComponentsDatesChartsComponent', () => {
  let component: ComponentsDatesChartsComponent;
  let fixture: ComponentFixture<ComponentsDatesChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsDatesChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDatesChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
