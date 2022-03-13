import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/api/models';
import { CategoryControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-subcategory-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.scss']
})
export class SubcategoryListComponent implements OnInit {

  @Input()
  parentCategoryId : number = 0; 

  @Input()
  parentCategoryName : string =  '';

  displayProduct : boolean = true ;

  subCategories : Array<Category> = new Array();
  

  constructor(private categoryService: CategoryControllerService) { }

  ngOnInit(): void {
    this.categoryService.getAllSubCategoriesByParent({parentCategoryId:this.parentCategoryId}).subscribe(subCategories => this.subCategories = subCategories);
  } 

}
