import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Reservation, Product, Person, Order } from '../models';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public logged = false;
  public registered = false;
  public username = '';
  public password = '';
  public regusername = '';
  public regpassword = '';
  public name = '';
  public phone: number;

  public products: Product[] = [];
  public date: Date;
  public person: Person;
  public orders: Order;

  public currentUser: Person;

  public oName: string;
  public oPhone: number;

  constructor( private loginService: LoginServiceService,
               private route: ActivatedRoute,
               private cartService: CartService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }

  auth(){
    this.loginService.login(this.username, this.password).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

  register() {
    this.loginService.register(this.regusername, this.name, this.phone, this.regpassword).subscribe(res =>
      localStorage.setItem('token', res.token));
    this.registered = true;
    this.logged = true;
    this.regusername = '';
    this.name = '';
    this.phone = 77777777777;
    this.regpassword = '';

  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }

  makeRes(){
    this.loginService.makeRes(this.name, this.phone, this.date).subscribe(orders => {this.orders = orders; });
  }
}
