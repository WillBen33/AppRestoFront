import { Component, OnInit } from '@angular/core';
import {Product} from "../../api/models/product";
import {Category} from "../../api/models/category";
import { ProductControllerService, CategoryControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  active = 1;

  public categories: Category[] = [];
  public products: Product[] = [];

  constructor(private productService: ProductControllerService,
              private categoryService: CategoryControllerService) { }

  public ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  public getProducts(): Product[] {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    })
    return this.products;
  }

  public getCategories(): Category[] {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
    return this.categories;
  }

  public getFilteredProducts(categoryId: number): Product[] {
    if (categoryId != 1){
      this.productService.getProductByCategory({id: categoryId}).subscribe(data => {
        this.products = data;
      })
      return this.products;
    }else {
      this.productService.getAllProducts().subscribe(data => {
        this.products = data;
      })
      return this.products;
    }
  }
}
