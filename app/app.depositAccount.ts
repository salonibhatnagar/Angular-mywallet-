import { Component, OnInit } from '@angular/core';

import { Account } from './account';
import { EmployeeService } from './app.EmployeeService';

@Component({
  selector: 'deposit-customer',
  templateUrl: './app.depositAccount.html',
 
})
export class depositAccountComponent implements OnInit {

  account: Account = new Account();
  submitted = false;
  amount:any;
  mobileno:any;
  constructor(private customerService: EmployeeService) { }
  ngOnInit() {
  }

  onDeposit() {
    this.customerService.deposite(this.mobileno,this.amount)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.account = new Account();
    window.location.reload();
  }

  
}