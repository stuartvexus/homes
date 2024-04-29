import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-properties-gallery',
  templateUrl: './properties-gallery.component.html',
  styleUrls: ['./properties-gallery.component.scss'],
})
export class PropertiesGalleryComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() showEdit = false;
  @Output() edit = new EventEmitter<boolean>();

  public imagePresented = 'assets/images/no-image.jpeg';

  constructor() { }

  ngOnInit() {
    this.setImage();
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

  public getImage(image: string) {
    image = this.generateImageUrl(image) || 'assets/images/no-image.jpeg';
    return `url(${image})`;
  }

  public setSelected(image: string) {
    this.imagePresented = this.generateImageUrl(image) || 'assets/images/no-image.jpeg';
  }

  public setImage() {
    this.imagePresented = this.generateImageUrl(this.images[0]) || 'assets/images/no-image.jpeg';
  }
}
