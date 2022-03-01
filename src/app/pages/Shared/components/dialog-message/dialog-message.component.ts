import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent implements OnInit {

  @Input()
  context : any;

  constructor(private dialogRef:NbDialogRef<DialogMessageComponent>) {
  }

  ngOnInit(): void {
  }

  cancel()
  {
    this.dialogRef.close();
  }

  continue()
  {
   this.dialogRef.close("submit");
  }
}
