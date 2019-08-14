import { Component, OnInit } from '@angular/core';

import { Account } from './account';
import { EmployeeService } from './app.EmployeeService';

@Component({
  selector: 'withraw-customer',
  templateUrl: './app.withrawAccount.html',
 
})
export class withrawAccountComponent implements OnInit {

  account: Account = new Account();
  submitted = false;
amount:any;
mobileno:any;
  constructor(private customerService: EmployeeService) { }
  ngOnInit() {
  }

 

  OnWithdraw() {
    console.log("with");
    this.customerService. withdraw(this.mobileno,this.amount)
      .subscribe(data => console.log(data), error => console.log(error));
      window.location.reload();
    //this.account = new Account();
  }

  
}