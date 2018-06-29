import { Component } from '@angular/core';
import { Customer } from './models/customer.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customers: Customer[];
  customer: Customer;
  title = 'Two way binding';
  name = ""; 
  city = ""; 
  mob = ""; 

  constructor(){
    this.customers=[];
  }

  updateName(e){
    this.name = e.target.value; 
  }
  updateCity(e){
    this.city = e.target.value; 
  }
  updateMob(e){
    this.mob = e.target.value; 
  }

  addToList(){
    this.customer = new Customer();
    this.customer.name=this.name;
    this.customer.city=this.city;
    this.customer.mob=this.mob;
    this.customers.push(this.customer);
  }
}

