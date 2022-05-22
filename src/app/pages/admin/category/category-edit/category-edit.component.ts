import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { get } from 'http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { Category } from 'src/app/api/models';
import { CategoryControllerService, ProductControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup = {} as FormGroup;
  oldCategory : Category = {} as Category;

  subCategories$: Observable<Array<Category>> = new Observable();
  parentCategories$: Observable<Array<Category>> = new Observable();
  currentId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryControllerService,
    private toastrService: ToastrService,
    private translateService: TranslateService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.parentCategories$ = this.categoryService.getAllParentsCategories();
    this.subCategories$ = this.categoryService.getAllCategories();
    this.activateRoute.queryParams.pipe(
      take(1),
      filter(params => params['id'] != null),
      switchMap(params => {
        this.currentId = params['id'];
        return this.categoryService.getCategoryById({ id: params['id'] })
      }),
      switchMap(category => {
          this.loadCurrentCategory(category);
          this.oldCategory = category;
          return this.categoryService.getParentCategory({categoryId:this.currentId})
      }),
      switchMap(parentCategory => {
        this.loadParentCategory(parentCategory);
        return this.categoryService.getAllSubCategoriesByParent({parentCategoryId:this.currentId })
      }),
    ).subscribe(categories => this.loadSubCategories(categories));
     
  }



  initForm() {
    this.categoryForm = this.formBuilder.group(
      {
        name: ['',Validators.required],
        parentCategory: null,
        subCategories: []
      }
    )
  }

  loadParentCategory(category: Category) {

    this.parentCategory?.setValue(category);
  }

  loadCurrentCategory(category: Category) {

    this.name?.setValue(category.name);
  }

  loadSubCategories(subCategories: Array<Category>) {
    this.subCategories?.setValue(subCategories);
  }

  get name() {
    return this.categoryForm.get("name");
  }
  get parentCategory() {
    return this.categoryForm.get("parentCategory");
  }
  get subCategories() {
    return this.categoryForm.get("subCategories");
  }



  addCategory() {
    let category: Category =
    {
      name: this.name?.value,
      parentCategory: this.parentCategory?.value,
      subCategories: this.subCategories?.value,
      id: this.currentId === 0 ? undefined : this.currentId
    }
    if (this.currentId !== 0) {
      this.categoryService.updateCategory({ body: category, id: this.currentId }).subscribe(() => {
        this.toastrService.success(this.translateService.instant("category.update", { name: category.name }));
        this.cancel();

      })
    } else {
      this.categoryService.addCategory({ body: category }).subscribe(() => {
        this.toastrService.success(this.translateService.instant("category.add", { name: category.name }))
        this.cancel();
      });
    }
  }

  cancel() {
    this.router.navigate(['/admin/categories'])
  }

  oldName(name:string)
  {
    return this.oldCategory.name === name;
  }

}
