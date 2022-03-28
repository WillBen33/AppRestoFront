import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeTypeDialogComponent } from './commande-type-dialog.component';

describe('CommandeTypeDialogComponent', () => {
  let component: CommandeTypeDialogComponent;
  let fixture: ComponentFixture<CommandeTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeTypeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
