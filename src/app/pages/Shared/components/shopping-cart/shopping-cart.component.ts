import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../../../../api/models/product";
import {NbToastrService} from "@nebular/theme";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public cartIsEmpty: boolean = true;

  @Input()
  public shoppingCart: Product[] = [];

  // public reducedArray: Product[]= [];

  constructor(private modalService: NgbModal,
              private toastrService: NbToastrService,
              private translateService: TranslateService) {}

  public ngOnInit(): void {}

  public open(content: any) {
    this.getshoppingCartItems();
    if(this.shoppingCart.length > 0){
      this.modalService.open(content);
      this.getshoppingCartItems();
      // this.reducedCartItems();
    }else {
      this.toastrService.warning(
        this.translateService.instant("menu.cart-is-empty"),
        this.translateService.instant("menu.cart-is-empty"),
        {
          duration: 4000,
        }
      )
    }
  }

  public getshoppingCartItems(): Product[] {
    this.shoppingCart = JSON.parse(<string>sessionStorage.getItem("shoppingCart"));
    return this.shoppingCart;
  }

  // public reducedCartItems(): {} {
  //   // Pour compter les éléments uniques
  //   this.shoppingCart = JSON.parse(<string>sessionStorage.getItem("shoppingCart"));
  //
  //   // Pour afficher un seul élément de chaque type
  //   this.reducedArray = JSON.parse(<string>sessionStorage.getItem("shoppingCart"));
  //   const uniqueItem = [...new Map(this.reducedArray.map(item => [JSON.stringify(item), item])).values()];
  //   this.reducedArray = uniqueItem;
  //
  //   // Retourne le nouveau tableau avec les nouvelles valeurs à afficher
  //   return this.reducedArray;
  // }

  cleanCart() {
    sessionStorage.removeItem("shoppingCart");
    this.toastrService.danger(
      this.translateService.instant("menu.cleanCart-success"),
      this.translateService.instant("menu.cleanCart-success"),
      {
        duration: 4000,
      }
    )
    this.shoppingCart = [];
    this.cartIsEmpty = true;
    return this.shoppingCart;
  }

  removeItem(product: Product) {
    // Méthode de remove
    const index = this.shoppingCart.indexOf(product);
    if (index > -1) {
      this.shoppingCart.splice(index, 1); // 2nd parameter means remove one item only
    }
    sessionStorage.setItem("shoppingCart", JSON.stringify(this.shoppingCart));
    this.toastrService.warning(
      this.translateService.instant("menu.remove-item"),
      this.translateService.instant("menu.remove-item"),
      {
        duration: 4000,
      }
    )
    return this.shoppingCart;
  }
}
