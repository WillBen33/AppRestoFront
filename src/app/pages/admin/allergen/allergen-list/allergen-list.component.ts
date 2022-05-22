import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs/operators';
import { Allergen, Product } from 'src/app/api/models';
import { AllergenControllerService, ProductControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-allergen-list',
  templateUrl: './allergen-list.component.html',
  styleUrls: ['./allergen-list.component.scss']
})
export class AllergenListComponent implements OnInit {

  allergens: Array<Allergen> = new Array();
  cols: any[] = [];

  constructor(private allergenService: AllergenControllerService,
    private translateService: TranslateService,
    private router: Router,
    private toastr: ToastrService) {
    this.allergenService.getAllAllergens().subscribe(allergens => this.allergens = allergens);

  }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'libelle', header: this.translateService.instant("allergen.libelle") },
    ];
  }

  edit(id: number) {
    this.router.navigate(['/admin/allergens/edit'], { queryParams: { id: id } });
  }

  addAllergen() {
    this.router.navigate(['/admin/allergens/edit'])
  }

  delete(rawData: Allergen) {
    this.allergenService.deleteAllergenById({ id: rawData.id! }).
      pipe(switchMap(() => this.allergenService.getAllAllergens()))
      .subscribe(allergens => {
        this.allergens = allergens
        this.toastr.success(this.translateService.instant("allergen.remove", { name: rawData.libelle }))
      });
  }

}
