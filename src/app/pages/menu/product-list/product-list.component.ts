import { Component, Input, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/api/models';
import { ProductControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  categoryId : number = 0;

  products$ : Observable<Product[]> = new Observable<Product[]>();
  public shoppingCart: Product[] = [];

  constructor(private productService : ProductControllerService,
    private toastrService : NbToastrService,
    private translateService : TranslateService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProductByCategory({id:this.categoryId});
  }


  addItem(product: Product) {
    this.shoppingCart.push(product);
    sessionStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
    this.toastrService.success(
      this.translateService.instant("menu.add-item"),
      this.translateService.instant("menu.add-item"),
      {
        duration: 4000,
      }
    )
    return this.shoppingCart;
  } 
}
