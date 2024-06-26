import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { PropertiesPage } from '../properties.page';

import { PropertiesPayComponent } from './properties-pay.component';

describe('PropertiesPayComponent', () => {
  let component: PropertiesPayComponent;
  let fixture: ComponentFixture<PropertiesDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiesDetailComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([{
        component: PropertiesPage,
        path: 'properties'
      }])]
    }).compileComponents();

    fixture = TestBed.createComponent(PropertiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
