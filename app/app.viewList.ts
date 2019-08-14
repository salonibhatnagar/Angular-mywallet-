import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './app.EmployeeService';
import { Account } from './account';
import { Observable } from 'rxjs';

//import { viewListComponent } from '../customers-list/customers-list.component';

@Component({
  selector: 'customer-details',
  templateUrl: 'app.customer.html'
  
})
export class ViewAccountComponent implements OnInit {

  @Input() accounts: Observable<Account[]>;
  
  constructor(private customerService: EmployeeService ) { }
 // private listComponent: CustomersListComponent
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.accounts = this.customerService.getCustomersList();
    console.log(this.accounts);
  }


   

  // updateActive(isActive: boolean) {
  //   this.customerService.updateCustomer(this.customer. accountId,
  //     { mobileno: this.customer.mobileno, holdername: this.customer.holdername,balance:this.customer.balance })
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.customer = data as Customer;
  //       },
  //       error => console.log(error));
  // }

  // deleteCustomer() {
  //   this.customerService.deleteCustomer(this.customer.accountId)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.listComponent.reloadData();
  //       },
  //       error => console.log(error));
  // }
}
