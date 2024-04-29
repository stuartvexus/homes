import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PropertiesService } from '../../bookings.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-properties-current-images',
  templateUrl: './properties-current-images.component.html',
  styleUrls: ['./properties-current-images.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PropertiesCurrentImagesComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() id: string;
  @Output() delete = new EventEmitter<boolean>();

  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 15,
    freeMode: true,
    slidesPerView: 'auto',
  };
  public selectedImages: string[] = [];

  constructor(
    private propertyService: PropertiesService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  public getImage(image: string) {
    image = image || 'assets/images/no-image.jpeg';
    return `url(${image})`;
  }

  public setSelected(selected: string) {
    if (this.isSelected(selected)) {
      this.selectedImages = this.selectedImages.filter(
        (img) => img !== selected
      );
      return;
    }
    this.selectedImages.push(selected);
  }

  public isSelected(image: string) {
    return this.selectedImages.includes(image);
  }

  public async deleteSelected() {
    
  }
}
