import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Product} from "../../api/models/product";
import {Category} from "../../api/models/category";
import { ProductControllerService, CategoryControllerService } from 'src/app/api/services';
import { NbToastrService } from '@nebular/theme';
import {TranslateService} from "@ngx-translate/core";
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  active = 1;

  public categories: Category[] = [];
  public products: Product[] = [];

  parentsCategories$ : Observable<Category[]> = new Observable<Array<Category>>();
  subCategories : Array<Category> = new Array();
  subCategoriesSubject$ : Subject<Category[]> = new Subject();

  public shoppingCart: Product[] = [];

  constructor(private productService: ProductControllerService,
              private categoryService: CategoryControllerService,
              private toastrService: NbToastrService,
              private translateService: TranslateService) { }

  public ngOnInit(): void {
    /* this.getCategories();
    this.getProducts(); */
    this.parentsCategories$ = this.categoryService.getAllParentsCategories();
  }


  sendCategoryId()
  {

  }
 

 /*  public getProducts(): Product[] {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    })
    return this.products;
  }

  public getCategories(): Category[] {
    this.categoryService.getAllParentsCategories().subscribe(data => {
      this.categories = data;
      console.log(data);
    })
    return this.categories;
  }

  public getFilteredProducts(categoryId: number): Product[] {
    // Si = 1 alors on affiche tous les produits
    if (categoryId === 1){
      this.productService.getAllProducts().subscribe(data => {
        this.products = data;
      })
      return this.products;
    }
    // Sinon, on affiche les produits par catégorie
    else {
      this.productService.getProductByCategory({id: categoryId}).subscribe(data => {
        this.products = data;
      })
      return this.products;
    }
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
  } */
}
