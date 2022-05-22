import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Category, Product } from 'src/app/api/models';
import { ProductControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products : Array<Product> = new Array();
  cols: any[] = [];

  constructor(private productService : ProductControllerService,
    private translateService : TranslateService,
    private toastr: ToastrService,
    private router : Router) {
      this.productService.getAllProducts().subscribe(products => this.products = products);

     }

  ngOnInit(): void {
    this.cols = [
      { field:'libelle' , header: 'Nom du produit' },
      { field: 'description', header: 'Description' },
      { field: 'price', header: 'Prix' },
  ];
  }

  edit(id : number)
  {
      this.router.navigate(['/admin/products/edit'], { queryParams: {id: id} });
  }

  addProduct()
  {
    this.router.navigate(['/admin/products/edit'])
  }
  
  delete(rawData: Product) {
    this.productService.deleteProductById({ id: rawData.id! }).
      pipe(switchMap(() => this.productService.getAllProducts()))
      .subscribe(products => {
        this.products = products;
        this.toastr.success(this.translateService.instant("product.remove", { name: rawData.libelle }))
      });
  }


}
