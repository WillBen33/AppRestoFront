import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { Category } from 'src/app/api/models';
import { CategoryControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Array<Category> = new Array();
  cols: any[] = [];

  constructor(private categoryService: CategoryControllerService,
    private translateService: TranslateService,
    private router: Router,
    private toastr: ToastrService) {
    this.categoryService.getAllCategories().subscribe(categories => this.categories = categories);

  }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: this.translateService.instant("category.name") },
      { field: 'id', header: 'Id' },
    ];
  }

  edit(id: number) {
    this.router.navigate(['/admin/categories/edit'], { queryParams: { id: id } });
  }

  addCategory() {
    this.router.navigate(['/admin/categories/edit'])
  }

  delete(rawData: Category) {
    this.categoryService.deleteCategoryById({ id: rawData.id! }).
      pipe(switchMap(() => this.categoryService.getAllCategories()))
      .subscribe(categories => {
        this.categories = categories;
        this.toastr.success(this.translateService.instant("category.remove", { name: rawData.name }))
      });
  }

}
