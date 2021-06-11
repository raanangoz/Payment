import { PaymentDetail } from './../shared/payment-detail.model';
import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {
  edit:number;
  constructor(public service: PaymentDetailService,
    private toastr:ToastrService) {
      this.edit = -1;
    }

  ngOnInit(): void {
    this.service.refreshList();
    
  }
  update(id:number){
    console.log(`updated ${id}`)
    this.edit = -1;
  }
  cancel(id:number){
    console.log(`did not update ${id}`)
    this.edit = -1;

  }

  populateForm(selectedRecord:PaymentDetail){
    this.service.formData =Object.assign({}, selectedRecord);
  }
  onDelete(id:number, digits:string){
    let last4digits = digits.slice(-4);
    if(confirm(`Are you sure to delete this record? \nCard ends with ${last4digits}`)){
      this.service.deletePaymentDetail(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Deleted Succesfully");

        },
        err=>{console.log(err)}
      
      )
    }  
  }
  onEdit(id:number){
    this.edit = id;
    console.log(id)
  }
}
