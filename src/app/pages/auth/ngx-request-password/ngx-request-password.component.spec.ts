import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRequestPasswordComponent } from './ngx-request-password.component';

describe('NgxRequestPasswordComponent', () => {
  let component: NgxRequestPasswordComponent;
  let fixture: ComponentFixture<NgxRequestPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxRequestPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRequestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
