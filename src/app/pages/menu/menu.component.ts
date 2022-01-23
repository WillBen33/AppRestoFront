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
  // public categoryId: number;

  constructor(private productService: ProductControllerService,
              private categoryService: CategoryControllerService) { }

  ngOnInit(): void {
    this.getPizzas();
    this.getCategories();
  }

  getPizzas(): Product[] {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
    return this.products;
  }

  getCategories(): Category[] {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    })
    return this.categories;
  }

  getProductsByCategory(categoryId: any) {
    this.productService.getProductByCategory(categoryId).subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
    console.log(categoryId);
  }

}
