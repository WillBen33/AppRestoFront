import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatThePaymentCardComponent } from './heat-the-payment-card.component';

describe('HeatThePaymentCardComponent', () => {
  let component: HeatThePaymentCardComponent;
  let fixture: ComponentFixture<HeatThePaymentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatThePaymentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatThePaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
