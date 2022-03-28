import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/api/models';
import { ProductControllerService } from 'src/app/api/services';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { CommandeTypeDialogComponent } from '../../Shared/components/commande-type-dialog/commande-type-dialog.component';
import { ProductSelectionDialogComponent } from '../../Shared/components/product-selection-dialog/product-selection-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  categoryId: number = 0;

  products$: Observable<Product[]> = new Observable<Product[]>();
  public shoppingCart: Product[] = [];

  constructor(private productService: ProductControllerService,
    private toastr: ToastrService,
    private translateService: TranslateService,
    private dialogService: NbDialogService,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProductByCategory({ id: this.categoryId });
  }



  selectionProcess(product: Product) {
    if (this.shoppingCartService.getCommadeType() && this.shoppingCartService.getNbProductInCart() !== 0) {
      this.openProductSelectionDialog(product).pipe(filter(res => res === "submit")).subscribe(() => this.toastr.success(
        this.translateService.instant("product.add"),
        this.translateService.instant("cart.title")
      ))
    }
    else {
      this.dialogService.open(CommandeTypeDialogComponent).onClose.pipe(
        filter(res => res === "submit"),
        switchMap(() => this.openProductSelectionDialog(product)),
        filter(res => res === "submit")
      ).subscribe(() => this.toastr.success(
        this.translateService.instant("product.add"),
        this.translateService.instant("cart.title")
      ))
    }
  }

  openProductSelectionDialog(product: Product) {

    return this.dialogService.open(ProductSelectionDialogComponent,
      {
        autoFocus: false,
        hasScroll: true,
        context: {
          product: product,
          update: false
        }
      }).onClose;
  }
}
