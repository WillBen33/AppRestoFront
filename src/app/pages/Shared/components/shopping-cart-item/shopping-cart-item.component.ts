import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs/operators';
import { CommandeProduct } from 'src/app/api/models';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { ProductSelectionDialogComponent } from '../product-selection-dialog/product-selection-dialog.component';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input()
  groupedCommandeProduct: Array<CommandeProduct> = new Array();;

  currentCommandeProduct: any;

  constructor(private dialogService: NbDialogService,
    private shoppingCartService: ShoppingCartService,
    private translateService: TranslateService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.currentCommandeProduct = this.groupedCommandeProduct[0];
  }

  removeFromShoppingCart() {
    this.shoppingCartService.removeFromShoppingCart(this.currentCommandeProduct);
    this.toastr.success(
      this.translateService.instant("product.remove"),
      this.translateService.instant("cart.title"));
  }


  openProductSelectionDialog() {
    this.dialogService.open(ProductSelectionDialogComponent,
      {
        autoFocus: false,
        hasScroll: true,
        context: {
          product: this.currentCommandeProduct.product,
          comment: this.currentCommandeProduct.comment,
          oldComment: this.currentCommandeProduct.comment,
          counter: this.groupedCommandeProduct.length,
          update: true
        }
      }).onClose.pipe(filter(res => res === "submit")).subscribe(() =>this.toastr.success(
        this.translateService.instant("product.update"),
        this.translateService.instant("cart.title")
      ))
  }
}
