import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../../api/models/contact";
import {ContactControllerService} from "../../api/services/contact-controller.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm!: FormGroup;

  constructor(private contactControllerService: ContactControllerService,
              private form: FormBuilder,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit() {
    if (this.contactForm.status === "VALID") {
      let contact: Contact = {
        firstName: this.getContactFormValues("firstName"),
        lastName: this.getContactFormValues("lastName"),
        phone: this.getContactFormValues("phone"),
        email: this.getContactFormValues("email"),
        message: this.getContactFormValues("message"),
        subject: this.getContactFormValues("subject"),
      }
      this.contactControllerService.sendEmail({body: contact}).subscribe();
      this.toastr.success('Votre email a bien été envoyé !', 'Merci !');
      this.contactForm.reset();
    } else {
      this.toastr.error('Tous les champs doivent être remplis !', 'Erreur !');
    }
  }

  public buildForm() {
    this.contactForm = this.form.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
    });
  }

  public getContactFormValues(formControlName: string) {
    return this.contactForm.get(formControlName)?.value;
  }
}
