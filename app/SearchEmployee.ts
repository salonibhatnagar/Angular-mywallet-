import { Component, OnInit, Input } from '@angular/core';
import { Account } from './account';
import { EmployeeService } from './app.EmployeeService';

@Component({
  selector: 'search-customers',
  templateUrl: 'app.search.html',
})
export class SearchAccountComponent implements OnInit {
  @Input() account: Account;
 
  accounts: Account;
  mobileno: any;
  status = false;
  status1=false;
show=false;

  

  constructor(private dataService: EmployeeService) { }

  ngOnInit() {
    this.mobileno = 0;
  }

  private searchCustomers() {
    this.dataService.getCustomersByMobile(this.mobileno)
      .subscribe(accounts=> this.accounts = accounts);
      this.status1=true;
      
  }

  onSubmit() {
    this.searchCustomers();
  }
  
  onUpdate(){
    this.searchCustomers();
    
    this.status = true;
  }

  onDelete() {
    this.show=true;
      this.dataService.deleteCustomer(this.mobileno).subscribe(data => console.log(data), error => console.log(error));;
        
    }

     onUpdateAccount() {
   
     this.dataService.updateCustomer(this.accounts.mobile,
      this.accounts).subscribe(data => console.log(data), error => console.log(error));
      
        this.status = false;
  }
}
