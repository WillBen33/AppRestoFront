import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { take, switchMap, filter } from 'rxjs/operators';
import { Allergen } from 'src/app/api/models';
import { AllergenControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-allergen-edit',
  templateUrl: './allergen-edit.component.html',
  styleUrls: ['./allergen-edit.component.scss']
})
export class AllergenEditComponent implements OnInit {

  allergenForm: FormGroup = {} as FormGroup;
  currentId: number = 0;
  oldAllergen : Allergen = {} as Allergen;
  constructor(private formBuilder: FormBuilder, 
    private allergenService: AllergenControllerService,
    private toastrService: ToastrService,
    private translateService: TranslateService,
    private router: Router,
    private activateRoute: ActivatedRoute) { 
      this.initForm();
    }

  ngOnInit(): void {
    this.activateRoute.queryParams.pipe(
      take(1),
      filter(params => params['id'] != null),
      switchMap(params => {
        this.currentId = params['id'];
        return this.allergenService.getAllergenById({ id: params['id'] })
      }) 
    ).subscribe(allergen =>{
       this.loadAllergen(allergen);
       this.oldAllergen = allergen;
    })
  }

  initForm() {
    this.allergenForm = this.formBuilder.group(
      {
        libelle: ['', Validators.required],
      }
    )
  }

  get libelle()
  {
    return this.allergenForm.get("libelle");
  }

  loadAllergen(allergen:Allergen)
  {
    this.allergenForm.patchValue(
      {
        libelle : allergen.libelle
      }
    )
  }

  getFormControlValue(formControlName: string) {
    return this.allergenForm.get(formControlName)?.value;
  }

  addAllergen() {
    let allergen: Allergen =
    {
      libelle: this.getFormControlValue("libelle"),
      id: this.currentId === 0 ? undefined : this.currentId
    }
    if (this.currentId !== 0) {
      this.allergenService.updateAllergen({ body: allergen, id: this.currentId }).subscribe(() => {
        this.toastrService.success(this.translateService.instant("allergen.update"));
        this.cancel();

      })
    } else {
      this.allergenService.addAllergen({ body: allergen }).subscribe(() => {
        this.toastrService.success(this.translateService.instant("allergen.add"))
        this.cancel();
      });
    }
  }


  cancel() {
    this.router.navigate(['/admin/allergens'])
  }

  oldLibelle(newLibelle:string)
  {
    return newLibelle === this.oldAllergen.libelle;
  }

}
