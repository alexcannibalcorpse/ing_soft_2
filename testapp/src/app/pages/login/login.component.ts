import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  values:string = '';

  constructor() { }

  ngOnInit() {
      this.values="inicio"
  }

  onKey(event: any) { // without type info
    this.values = event.target.value ;
  }

  go(){
    this.values = "reset"
  }



}
