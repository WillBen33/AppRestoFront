import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Allergen, Product } from 'src/app/api/models';
import { AllergenControllerService, ProductControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss']
})
export class ProductDetailDialogComponent implements OnInit {

  product: any;
  productAllergens: Allergen[] = new Array<Allergen>();
  constructor(private nbDialogRef: NbDialogRef<ProductDetailDialogComponent>,
    private allergenService: AllergenControllerService) { }

  ngOnInit(): void {
    this.allergenService.getAllergensByProduct({ id: this.product.id }).subscribe(data => this.productAllergens = data);
  }


}
