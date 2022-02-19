import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import {NbToastrService} from "@nebular/theme";
import {TranslateService} from "@ngx-translate/core";
import {ContactService} from "../../services/contact/contact.service";
import {Contact} from "../../api/models/contact";
import {ContactControllerService} from "../../api/services/contact-controller.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required],
  })

  public contact: Contact | undefined;

  public invalidForm: boolean = true;

  token: string | undefined;

  constructor(private fb: FormBuilder,
              private toastrService: NbToastrService,
              private contactControllerService: ContactControllerService,
              private translateService: TranslateService) {
    this.token = undefined;
  }

  public ngOnInit(): void {
    // console.log(this.contactForm.status);
  }

  onSubmit() {
    // this.submitForm();
    // console.log(this.contactForm.status);
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }
    this.submitForm();
  }

  public submitForm() {
    if (this.contactForm.status === "VALID") {
      this.toastrService.success(
        this.translateService.instant("contact.valid-contactForm-message"),
        this.translateService.instant("contact.valid-contactForm-title"),
        {
          duration: 4000,
        }
      )
      this.contact = this.contactForm.value;
      console.log(this.contact);

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // appel le service d'envoi de mail
      // je passe en parametre this.contactForm.getRawValue()
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
      this.contactControllerService.sendEmail(this.contactForm.getRawValue());
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    } else if (this.contactForm.status === "INVALID") {
      this.toastrService.warning(
        this.translateService.instant("contact.invalid-contactForm-message"),
        this.translateService.instant("contact.invalid-contactForm-title"),
        {
          duration: 4000,
        }
      )
    } else {
      this.toastrService.danger(
        this.translateService.instant("contact.error-contactForm-message"),
        this.translateService.instant("contact.error-contactForm-title"),
        {
          duration: 40000,
        }
      )
    }
  }

}
