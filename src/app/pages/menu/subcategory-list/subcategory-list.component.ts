import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/api/models';
import { CategoryControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory-list.component.html',
  styleUrls: ['./subcategory-list.component.scss']
})
export class SubcategoryListComponent implements OnInit {

  @Input()
  parentCategoryId : number = 0; 

  @Input()
  parentCategoryName : string =  '';

  displayProduct : boolean = true ;

  subCategories$ : Observable<Category[]> = new Observable<Category[]>();
  

  constructor(private categoryService: CategoryControllerService) { }

  ngOnInit(): void {
    this.subCategories$ =  this.categoryService.getAllSubCategoriesByParent({parentCategoryId:this.parentCategoryId})
  } 

}
