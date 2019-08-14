import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:5000/accounts';

  constructor(private http: HttpClient) { }
 
  createCustomer(account: Account): Observable<any> {
      let object={
        "aid": account.aid,
        "mobile": account.mobile,
        "accountholder": account.accountholder,
        "balance": account.balance
        
    }
    console.log(account.mobile)
    return this.http.post<any>(`${this.baseUrl}` + `/new`, object );
  }

  updateCustomer(mobileno: number, account: Account): Observable<Object> {
    console.log("Object"+account);
    console.log("Account id"+account.aid)
    console.log("Account id"+account.mobile)
    let object={
        "aid": account.aid,
        "mobile": account.mobile,
        "accountholder": account.accountholder,
        "balance": account.balance
    } 
    console.log(account);
    return this.http.post('http://localhost:5000/accounts/update', object);
  }

  deleteCustomer(mobile: any): Observable<any> {
    console.log("Hello");
    console.log(`${this.baseUrl}/${mobile}`)
    return this.http.delete(`${this.baseUrl}/delete/${mobile}`);
  }

  getCustomersList(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}/list`);
  }

  getCustomersByMobile(mobileno: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${mobileno}`);
  }

  

  deposite(mobile: any,amount:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/mobileno/${mobile}/amount/${amount}`);
  }
  
  withdraw(mobile: any,amount:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/withdraw/mobileno/${mobile}/amount/${amount}`);
  }

  transfer(from: any,to:any,amount:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/from/${from}/to/${to}/amount/${amount}`);
  }

}
