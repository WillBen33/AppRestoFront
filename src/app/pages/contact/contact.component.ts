import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Contact} from "../../api/models/contact";
import {ContactControllerService} from "../../api/services/contact-controller.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    subject: new FormControl(''),
  });

  constructor(private contactControllerService: ContactControllerService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let contact: Contact = {
      firstName: this.getContactFormValues("firstName"),
      lastName: this.getContactFormValues("lastName"),
      phone: this.getContactFormValues("phone"),
      email: this.getContactFormValues("email"),
      message: this.getContactFormValues("message"),
      subject: this.getContactFormValues("subject"),
    }
    this.contactControllerService.sendEmail({body: contact}).subscribe();
  }

  public getContactFormValues(formControlName: string) {
    return this.contactForm.get(formControlName)?.value;
  }

}
