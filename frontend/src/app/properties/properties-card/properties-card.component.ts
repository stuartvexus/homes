import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from 'src/app/properties/properties.service';
import { Property } from 'src/app/shared/interface/property';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-properties-card',
  templateUrl: './properties-card.component.html',
  styleUrls: ['./properties-card.component.scss'],
})


export class PropertiesCardComponent implements OnInit {

  @Input() property: Property;
  constructor(
    private propertiesService: PropertiesService,
    private router: Router,
    public userService: UserService
  ) { }

  ngOnInit() { }

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
  

  public selectProperty(property: Property) {
    this.propertiesService.property = property;
    
    this.router.navigate(['/properties', property.property_id]);
  }
}
