import { Component, OnInit } from '@angular/core';
import {Product} from "../../api/models/product";
import {Category} from "../../api/models/category";
import { ProductControllerService, CategoryControllerService } from 'src/app/api/services';
import { NbToastrService } from '@nebular/theme';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  active = 1;

  public categories: Category[] = [];
  public subCategories: Category[] = [];
  public products: Product[] = [];

  public shoppingCart: Product[] = [];

  constructor(private productService: ProductControllerService,
              private categoryService: CategoryControllerService,
              private toastrService: NbToastrService,
              private translateService: TranslateService) { }

  public ngOnInit(): void {
    this.getCategories();
    this.getAllSubCategories();
    this.getProducts();
  }

  public getProducts(): Product[] {
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

  public getAllSubCategories(): Category[] {
    this.categoryService.getSubCategorieByParentCategoryId().subscribe(data => {
      this.subCategories = data;
      console.log(data);
    })
    return this.subCategories;
  }

  public getFilteredSubProducts(id: number) {
    console.log(id);
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
  }
}
