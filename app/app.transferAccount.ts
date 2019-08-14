import { Component, OnInit } from '@angular/core';

import { Account } from './account';
import { EmployeeService } from './app.EmployeeService';

@Component({
  selector: 'transfer-customer',
  templateUrl: './app.transferAccount.html',
 
})
export class transferAccountComponent implements OnInit {

  account: Account = new Account();
  submitted = false;
  amount:any;
  from:any;
  to:any;
  constructor(private customerService: EmployeeService) { }
  ngOnInit() {
  }

  onTransfer() {
    this.customerService. transfer(this.from,this.to,this.amount)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.account = new Account();
    window.location.reload();
  }

  
}