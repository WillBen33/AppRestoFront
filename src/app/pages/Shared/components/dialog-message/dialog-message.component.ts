import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent implements OnInit {

  constructor(private dialogRef:NbDialogRef<DialogMessageComponent>, private router : Router) { }

  ngOnInit(): void {
  }

  cancel()
  {
    this.dialogRef.close();
  }

  continue()
  {
    this.router.navigate(['/auth/sign-in']);
    this.cancel();
  }
}
