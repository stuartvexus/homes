import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesDetailComponent } from './properties-detail/properties-detail.component';
import { PropertiesPayComponent } from './properties-pay/properties-pay.component';

import { PropertiesPage } from './properties.page';

const routes: Routes = [
  {
    path: '',
    component: PropertiesPage
  },
  {
    path: ':id',
    component: PropertiesDetailComponent
  },
  {
    path: 'pay/:id',
    component: PropertiesPayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesPageRoutingModule { }
