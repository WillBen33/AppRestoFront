import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';


@Component({
  selector: 'app-commande-type-dialog',
  templateUrl: './commande-type-dialog.component.html',
  styleUrls: ['./commande-type-dialog.component.scss']
})
export class CommandeTypeDialogComponent implements OnInit {

  selectedItemFormControl: FormControl = new FormControl('TAKE_AWAY');
  constructor(private nbDialogRef: NbDialogRef<CommandeTypeDialogComponent>,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }


  sendOption() {
    this.shoppingCartService.setCommandeType(this.selectedItemFormControl.value);
    this.nbDialogRef.close("submit");
  }
}
