import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from 'src/app/bookings/bookings.service';
import { Booking } from 'src/app/shared/interface/booking';
import { UserService } from 'src/app/user/user.service';
import {
  ModalController,
  PopoverController,
  ToastController,
} from '@ionic/angular';


@Component({
  selector: 'app-properties-card',
  templateUrl: './properties-card.component.html',
  styleUrls: ['./properties-card.component.scss'],
})
export class PropertiesCardComponent implements OnInit {

  @Input() property: Booking;
  constructor(
    private bookingsService: PropertiesService,
    private router: Router,
    public userService: UserService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
		
	}
  public payBooking(property: Booking) {
	  let res = this.bookingsService.payBooking(this.property.booking_id);
    this.bookingsService.property = property;
    this.presentToast('Request initiatied, processing');
    //this.router.navigate(['/bookings', property.booking_id]);
  }
  
  public deleteBooking(property: Booking) {
	this.bookingsService.removeBooking(this.property.booking_id);
    this.bookingsService.property = property;
    this.bookingsService.fetchProperties()
    this.router.navigate(['/map']);
  }
  
  public generateImageUrl(imageUrl: string): string {
    const server_url = `https://estateserver-5e37ae72f4d9.herokuapp.com/`
    if (imageUrl) {
      // If the image URL includes 'http://localhost:8000', replace it with the target URL
      imageUrl = imageUrl.replace('http://localhost:8000', server_url);
      // Concatenate the target URL if it's not already included
      if (!imageUrl.startsWith(server_url)) {
        imageUrl = server_url + imageUrl;
      }
      return imageUrl;
    } else {
      // Return a default image URL or an empty string if no image URL is provided
      return //'default-image-url.jpg'; // or return ''
    }
  }
  public selectProperty(property: Booking) {
	//this.bookingsService.addProperty(this.property.property_id);
    this.bookingsService.property = property;
    this.router.navigate(['/properties', property.property_id]);
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
