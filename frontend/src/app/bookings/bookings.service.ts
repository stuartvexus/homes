import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../shared/interface/api-response';
// import { properties as dummyData } from '../shared/dummy-data';
import { Booking } from '../shared/interface/booking';
import { headerDict } from '../shared/utility';
import { UserService } from '../user/user.service';

const propertyUrl = environment.api.server + 'book';
const requestOptions = (
  { token = '', contentType = 'application/json' },
  body = {}
) => ({
  headers: new HttpHeaders(headerDict({ token, contentType })),
  body,
});

interface ResProperty extends ApiResponse {
  data: Booking;
}

interface ResProperties extends ApiResponse {
  data: Booking[];
}

interface ResStrings extends ApiResponse {
  data: string[];
}

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  public readonly properties$: Observable<Booking[]>;
  public readonly property$: Observable<Booking>;
  private readonly propertiesSub = new BehaviorSubject<Booking[]>([]);
  private readonly propertySub = new BehaviorSubject<Booking>(null);

  constructor(private http: HttpClient, private userService: UserService) {
    this.properties$ = this.propertiesSub.asObservable();
    this.property$ = this.propertySub.asObservable();
    this.fetchProperties();
  }

  public get properties(): Booking[] {
    return this.propertiesSub.getValue();
  }

  public set properties(property: Booking[]) {
    this.propertiesSub.next(property);
  }

  public get property(): Booking | null {
    return this.propertySub.getValue();
  }

  public set property(property: Booking) {
    this.propertySub.next(property);
  }

  public async fetchProperties(): Promise<void> {
    const token = this.userService.token();
    try {
      this.properties = (
        await firstValueFrom(this.http.get<ResProperties>(propertyUrl+"/user?token="+token,requestOptions({ token })))
      ).data;
    } catch (error) {
      console.error(error);
    }
  }

  public async fetchProperty(id: string) {
    
    try {
      this.property = (
        await firstValueFrom(this.http.get<ResProperty>(propertyUrl + '/' + id))
      ).data;
    } catch (error) {
      console.error(error);
    }
  }

  public async addProperty(property: Booking): Promise<ResProperty> {
    const token = this.userService.token();
    try {
      const res = await firstValueFrom(
        this.http.post<ResProperty>(
          propertyUrl,
          property,
          requestOptions({ token })
        )
      );

      this.properties = [...this.properties, res.data];
	  
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

 
  
  public async payBooking(propId: string): Promise<String> {
    const token = this.userService.token();
    try {
      const url = `${propertyUrl}/pay/${propId}`;
      const res = await firstValueFrom(
        this.http.post<ResProperty>(url+`?token=${token}`, requestOptions({ token }))
      );

      this.properties = this.properties
      return res.message
    } catch (error) {
      console.error(error);
    }
  }

  public async removeBooking(propId: string): Promise<void> {
    const token = this.userService.token();
    try {
      const url = `${propertyUrl}/${propId}`;
      const res = await firstValueFrom(
        this.http.delete<ResProperty>(url, requestOptions({ token }))
      );

      this.properties = this.properties.filter(
        (property) => property.property_id !== res.data.property_id
      );
    } catch (error) {
      console.error(error);
    }
  }

  public async updateProperty(updated: Booking): Promise<ResProperty> {
    const url = `${propertyUrl}/${updated.property_id}`;
    try {
      const token = this.userService.token();
      const res = await firstValueFrom(
        this.http.patch<ResProperty>(url, updated, requestOptions({ token }))
      );

      // UPDATE CURRENT PROPERTIES
      this.properties = this.properties.map((property) =>
        property.property_id === updated.property_id ? res.data : property
      );
      this.property = res.data;

      return res;
    } catch (error) {
      console.error(error);
      return error.error || error;
    }
  }
}
