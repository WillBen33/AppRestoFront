import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { Allergen, Category, Product } from 'src/app/api/models';
import { AllergenControllerService, CategoryControllerService, ProductControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {


  productForm: FormGroup = {} as FormGroup;
  allergens$: Observable<Array<Allergen>> = new Observable();
  categories$: Observable<Array<Category>> = new Observable();
  currentId: number = 0;
  oldProduct : Product = {} as Product;
  constructor(private formBuilder: FormBuilder,
    private allergenService: AllergenControllerService,
    private categoryService: CategoryControllerService,
    private productService: ProductControllerService,
    private toastrService: ToastrService,
    private translateService: TranslateService,
    private router: Router,
    private activateRoute: ActivatedRoute) {
    this.initForm();
  }

  ngOnInit(): void {
    this.allergens$ = this.allergenService.getAllAllergens();
    this.categories$ = this.categoryService.getAllCategories();
    this.activateRoute.queryParams.pipe(
      take(1),
      filter(params => params['id'] != null),
      switchMap(params => {
        this.currentId = params['id'];
        return this.productService.getProductById({ id: params['id'] })
      }),
      switchMap(product => {
        this.oldProduct = product;
        this.loadProductFormValues(product);
        return this.allergenService.getAllergensByProduct({ id: this.currentId })
      }),
      switchMap(allergens => {
        this.loadProductAllergens(allergens);
        return this.categoryService.getCategoriesByProduct({ productId: this.currentId })
      })
    ).subscribe(categories => this.loadProductCategories(categories))
  }

  initForm() {
    this.productForm = this.formBuilder.group(
      {
        libelle: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        allergens: [],
        categories: [[], Validators.required]
      }
    )
  }

  loadProductFormValues(product: Product) {
    this.productForm.patchValue(
      {
        libelle: product.libelle,
        description: product.description,
        price: product.price,
        allergens: product.allergens,
        categories: product.categories

      }
    )
  }

  loadProductAllergens(allergens: Array<Allergen>) {
    this.allergens?.setValue(allergens);
  }

  loadProductCategories(categories: Array<Category>) {
    this.categories?.setValue(categories);
  }

  get allergens() {
    return this.productForm.get("allergens");
  }

  get libelle() {
    return this.productForm.get("libelle");
  }

  get description() {
    return this.productForm.get("description");
  }

  get categories() {
    return this.productForm.get("categories");
  }


  get price() {
    return this.productForm.get("price");
  }

  getFormControlValue(formControlName: string) {
    return this.productForm.get(formControlName)?.value;
  }

  addProduct() {
    let product: Product =
    {
      libelle: this.getFormControlValue("libelle"),
      description: this.getFormControlValue("description"),
      price: Number(this.getFormControlValue("price")),
      categories: this.getFormControlValue("categories"),
      allergens: this.getFormControlValue("allergens"),
      id: this.currentId === 0 ? undefined : this.currentId
    }
    if (this.currentId !== 0) {
      this.productService.updateProduct({ body: product, id: this.currentId }).subscribe(() => {
        this.toastrService.success(this.translateService.instant("product.update",{name:product.libelle}));
        this.cancel();

      })
    } else {
      this.productService.addProduct({ body: product }).subscribe(() => {
        this.toastrService.success(this.translateService.instant("product.add.database",{name:product.libelle}))
        this.cancel();
      });
    }
  }


  cancel() {
    this.router.navigate(['/admin/products'])
  }

  oldLibelle(libelle:string)
  {
    return libelle === this.oldProduct.libelle;
  }
}
