import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { filter, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/api/models';
import { UserControllerService } from 'src/app/api/services';
import { DialogMessageComponent } from '../../Shared/components/dialog-message/dialog-message.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  showPassword: boolean = false;
  showRePassword: boolean = false;
  loading: boolean = false;
  editMode: boolean = false;
  oldUser: any;

  user: any = {
    billingAdress: {
      city: '',
      street: '',
      streetNumber: '',
      zipCode: '',
      additionalAdress: '',
      country: '',
      department: ''
    },
    deliveryAdress: {
      city: '',
      street: '',
      streetNumber: '',
      zipCode: '',
      additionalAdress: '',
      country: '',
      department: ''
    },
    email: '',
    firstname: '',
    lastname: '',
    password: "",
    phoneNumber: '',
    userSecret: 'ok',
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true,
    enabled: false,
    civility: "MADAME",
    terms: false,
    profils: new Array()
  };
  checkedBillingAdress: boolean = false;

  constructor(private nbAuthService: NbAuthService, private userService: UserControllerService,
    private toastrService: NbToastrService,
    private translateService: TranslateService,
    private dialogService: NbDialogService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = JSON.parse(JSON.stringify(user));
      this.oldUser = JSON.parse(JSON.stringify(user));
    });
  }

  setBillingAdress(checked: boolean) {
    if (checked) {
      this.user.billingAdress = this.user.deliveryAdress;
      this.checkedBillingAdress = true;
    } else {
      this.checkedBillingAdress = false;
      this.user.billingAdress = {
        city: '',
        street: '',
        streetNumber: '',
        zipCode: '',
        additionalAdress: '',
        country: '',
        department: ''
      }
    }
  }

  editProfil() {
    this.editMode = true;
  }

  cancelChanges() {
    this.editMode = false;
    this.user = this.oldUser;
  }

  deleteAccount() {
    let message = this.translateService.instant("confirm.delete");
    this.dialogService.open(DialogMessageComponent,
      {
        context: {
          context: {
            message: message
          }
        }
      }).onClose.pipe(
        filter(value => value === 'submit'),
        switchMap(() => this.userService.deleteUserById({ id: this.user.id })),
        switchMap(() => this.nbAuthService.logout('email'))
      ).subscribe(() => {
        this.toastrService.success(this.translateService.instant("account.delete.message"),
          this.translateService.instant("account.delete.title"));
        this.router.navigate(['/home']);
      })
  }

  saveChanges() {
    this.userService.updateUser({ id: this.user.id, body: this.user }).subscribe(() => {
      this.toastrService.success(
        this.translateService.instant("account.profil.updated"),
        this.translateService.instant("account.profil.msgTitle")
      ),
        this.editMode = false;
    });
  }

  toggleFieldTextType(field: NgModel) {
    if (field.name === 'password')
      this.showPassword = !this.showPassword;
    if (field.name === 'rePass')
      this.showRePassword = !this.showRePassword;
  }

  oldPhoneNumber(phoneNumber: any) {
    return phoneNumber === this.oldUser.phoneNumber;
  }

  oldEmail(email: any) {
    return email === this.oldUser.email;
  }

}
