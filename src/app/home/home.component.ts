import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hello =" hello from home"
  constructor() { }

  ngOnInit() {
    console.log('hello home');
  }

}
