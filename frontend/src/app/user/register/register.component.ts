import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { CustomValidatorsDirective } from 'src/app/shared/directives/custom-validators.directive';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public error = false;
  public registerForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private customValidators: CustomValidatorsDirective,
    private toastCtrl: ToastController,
    private loadingController: LoadingController,
    private router: Router,
    private user: UserService
  ) {
    this.registerForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, customValidators.emailValidation()]],
		phone: ['', [Validators.required, Validators.minLength(10)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            this.customValidators.patternValidator(/\d/, { hasNumber: true }),
            this.customValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true,
            }),
            this.customValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true,
            }),
            this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, {
              hasSpecialCharacters: true,
            }),
          ],
        ],
        confirm: ['', Validators.required],
        termService: [false, Validators.required],
      },
      {
        validators: this.customValidators.isDifferent(
          'password',
          'confirm',
          'notConfirmed'
        ),
      }
    );
  }

  ngOnInit() {}

  public async submit() {
    if (this.registerForm.invalid) {
      this.error = true;
      return;
    }
    const loading = await this.presentLoading();
    loading.present();

    const { fullName, email,phone, password } = this.registerForm.value;
    const result = await this.user.register(fullName, email,phone, password);
    if (!result.error) {
      loading.dismiss();
      await this.showToast('Success, registration is complete.');
      await this.router.navigateByUrl('/user/account/profile');
      return;
    }
    await this.showToast('Error:' + result.error.message, 'danger');
    loading.dismiss();
  }

  private async presentLoading() {
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
  }

  private async showToast(message: string, color = 'success') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
    });
    toast.present();
  }
}
