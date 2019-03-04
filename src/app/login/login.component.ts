import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='kiran'

  password='123'

  errorMessage='Invalid Credentials !'

  inValidLogin = false

  constructor(private router :Router) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username);
    if(this.username==='kiran' && this.password==='123'){
      this.router.navigate(['welcome'])
      this.inValidLogin=false
     }
    else
    {
      this.inValidLogin=true
    }
  }

}
