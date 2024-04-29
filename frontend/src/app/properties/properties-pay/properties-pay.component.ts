import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ModalController,
  PopoverController,
  ToastController,
} from '@ionic/angular';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { CustomValidatorsDirective } from 'src/app/shared/directives/custom-validators.directive';

import { Property } from 'src/app/shared/interface/property';
import { PropertiesService } from '../properties.service';
import { ActionPopupComponent } from 'src/app/shared/components/action-popup/action-popup.component';
import { PropertiesEditComponent } from '../properties-edit-modal/properties-edit.component';
import { PropertiesUploadsComponent } from '../properties-uploads-modal/properties-uploads.component';
import { UserService } from 'src/app/user/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PropertiesGalleryComponent } from '../properties-gallery/properties-gallery.component';

@Component({
  selector: 'app-properties-pay',
  templateUrl: './properties-pay.component.html',
  styleUrls: ['./properties-pay.component.scss'],
})
export class PropertiesPayComponent implements OnInit, OnDestroy {
  @ViewChild('propertiesGallery') propertiesGallery: PropertiesGalleryComponent;
  public property: Property | undefined;
  public isOwner = false;
  public ready = false;
  private unsubscribe$ = new Subject<void>();
  public payForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private customValidators: CustomValidatorsDirective,
    public location: Location,
    private userService: UserService,
    private router: Router,
    private propertiesService: PropertiesService,
    private popoverCtrl: PopoverController,
    public modalController: ModalController,
    private toastCtrl: ToastController,
    private route: ActivatedRoute
  ) {
    this.payForm = this.fb.group(
      {
        phone: ['', [Validators.required, Validators.minLength(10)]],
        name: ['', [Validators.required, Validators.minLength(4)]],
      }
    )
  }

  async ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.propertiesService.property$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(async (property) => {
        this.property = property;
        if (!this.property) {
          await this.propertiesService.fetchProperty(paramId);
        }
        this.ready = true;
        this.isOwner =
          this.userService.user?.user_id === this.property?.user_id;

        if(this.propertiesGallery && this.property) {
          this.propertiesGallery.setImage();
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public async actionPopup() {
    const popover = await this.popoverCtrl.create({
      component: ActionPopupComponent,
      componentProps: {
        message: false,
        edit: this.isOwner,
        delete: this.isOwner,
      },
      translucent: true,
    });
    await popover.present();

    const { data } = await popover.onDidDismiss();
    if (!data) {
      return;
    }

   
  }
 
  
  public findInMap() {
    const { lat, lng } = this.property.position;
    this.router.navigate(['/map'], { queryParams: { lat, lng } });
  }

  public async processPayment() {
    // Add your payment processing logic here
    if (this.payForm.invalid) {
      //this.error = true;
      return;
    }
    
    const { name,phone} = this.payForm.value;
   
    const result = await this.propertiesService.bookProperty(this.property.property_id,{phone:phone,name:name});
    if (result) {
      //loading.dismiss();
      await this.presentToast('Success, registration is complete.');
      await this.router.navigateByUrl('/user/account/profile');
      return;
    }
    //await this.presentToast('Error:' + result, 'danger');
    //loading.dismiss();
    console.log('Payment processed!');
  }
  private async presentToast(
    message: string,
    color = 'success',
    duration = 3000
  ) {
    const toast = await this.toastCtrl.create({
      message,
      duration,
      color,
    });
    toast.present();
  }
}
