import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  ngOnInit(): void {
    console.log('login init...')
  }
}
