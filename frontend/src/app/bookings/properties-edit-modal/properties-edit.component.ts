import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { PropertyType } from 'src/app/shared/enums/property';
import { Booking } from 'src/app/shared/interface/booking';
import { PropertiesCoordinatesComponent } from '../properties-coordinates-modal/properties-coordinates.component';
import { PropertiesService } from '../bookings.service';

@Component({
  selector: 'app-properties-edit',
  templateUrl: './properties-edit.component.html',
  styleUrls: ['./properties-edit.component.scss'],
})
export class PropertiesEditComponent implements OnInit {
  public propertyForm: UntypedFormGroup;
  public propertyTypes = [
    {
      label: 'residential',
      value: PropertyType.residential
    },
    {
      label: 'commercial',
      value: PropertyType.commercial
    },
    {
      label: 'industrial',
      value: PropertyType.industrial
    }, {
      label: 'land',
      value: PropertyType.land
    }
  ];
  public property: Booking;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: UntypedFormBuilder,
    private propertiesService: PropertiesService,
    private toastCtrl: ToastController
  ) {
    this.propertyForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      description: [''],
      type: [PropertyType.residential],

      price: ['',],
      currency: ['', Validators.maxLength(3)],
      features: [''],
      lat: ['0', Validators.required],
      lng: ['0', Validators.required],
    });
  }

  ngOnInit() {
    this.propertiesService.property$.subscribe(propertys => {
      this.property = propertys;
      if (propertys) {
        const {
          property, amount, description, enquiries, status,accepted
        } = propertys;

        this.propertyForm.patchValue(
          {
            property,
            amount,
            description,
            enquiries,
            status,
            accepted
            
          }
        );
      }
    });
  }

  public async update(): Promise<void> {
    if (!this.propertyForm.valid) {
      return;
    }
    const {
      name,
      address,
      description,
      type,
      updatedAt,
      price,
      currency,
      features,
      lat,
      lng,
    } = this.propertyForm.value;

    const editedProperty = null
    const updatedProperty = { ...this.property, ...editedProperty };
    const res = await this.propertiesService.updateProperty(updatedProperty);

    if (res) {
      const toast = await this.toastCtrl.create({
        message: res.message,
        duration: 3000,
        color: 'success'
      });
      await toast.present();
    }
    this.modalCtrl.dismiss();
  }

  public close() {
    this.modalCtrl.dismiss();
  }

  public async openMap() {
    const modal = await this.modalCtrl.create({
      component: PropertiesCoordinatesComponent
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      const { lat, lng } = data;
      this.propertyForm.patchValue({ lat, lng });
    }
  }
}
