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

  constructor(private categoryService: CategoryControllerService) { }

  public ngOnInit(): void {
    this.parentsCategories$ = this.categoryService.getAllParentsCategories();
  }
 
}