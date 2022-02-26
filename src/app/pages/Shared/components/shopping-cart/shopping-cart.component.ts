import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Product} from "../../../../api/models/product";
import {count} from "rxjs/operators";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public closeResult = '';

  public emptyCart: boolean = false;

  @Input()
  public shoppingCart: Product[] = [];

  public reducedArray: Product[]= [];

  constructor(private modalService: NgbModal,
              private toastrService: NbToastrService) {}

  public ngOnInit(): void {}

  public open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.getshoppingCartItems();
    this.reducedCartItems();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public getshoppingCartItems(): Product[] {
    this.shoppingCart = JSON.parse(<string>sessionStorage.getItem("shoppingCart"));
    return this.shoppingCart;
  }

  public reducedCartItems(): {} {
    // Pour compter les éléments uniques
    this.shoppingCart = JSON.parse(<string>sessionStorage.getItem("shoppingCart"));

    // Pour afficher un seul élément de chaque type
    this.reducedArray = JSON.parse(<string>sessionStorage.getItem("shoppingCart"));
    const uniqueItem = [...new Map(this.reducedArray.map(item => [JSON.stringify(item), item])).values()];
    this.reducedArray = uniqueItem;

    // Retourne le nouveau tableau avec les nouvelles valeurs à afficher
    return this.reducedArray;
  }

  cleanCart() {
    sessionStorage.removeItem("shoppingCart");
    return this.shoppingCart;
  }
}
