import { PaymentDetail } from './../shared/payment-detail.model';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './../payment-details/payment-detail-form/payment-detail-form.component';

const routes: Routes = [
  {path: 'register-payment-details-form', component: PaymentDetailFormComponent},
  {path: 'history-all-cards', component: PaymentDetailsComponent}

]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)
    
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
export const routingComponents = [PaymentDetailFormComponent,PaymentDetailsComponent];