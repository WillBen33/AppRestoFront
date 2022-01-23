import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-register',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './success-register.component.html',
  styleUrls: ['./success-register.component.scss']
})
export class SuccessRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
