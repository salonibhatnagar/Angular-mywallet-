import { Component, OnInit } from '@angular/core';

import { Account } from './account';
import { EmployeeService } from './app.EmployeeService';

@Component({
  selector: 'create-customer',
  templateUrl: './app.addEmployee.html',
 
})
export class CreateCustomerComponent implements OnInit {

  account: Account = new Account();
  submitted = false;

  constructor(private customerService: EmployeeService) { }
  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    window.location.reload();
    //this.account = new Account();
  }

  save() {
    this.customerService.createCustomer(this.account)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.account = new Account();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}