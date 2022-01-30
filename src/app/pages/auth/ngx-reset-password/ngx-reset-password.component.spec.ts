import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxResetPasswordComponent } from './ngx-reset-password.component';

describe('NgxResetPasswordComponent', () => {
  let component: NgxResetPasswordComponent;
  let fixture: ComponentFixture<NgxResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxResetPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
