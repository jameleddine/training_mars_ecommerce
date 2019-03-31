import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  etat = false;
  imgsrc = "http://www.hosuradventist.org/img/public.png"
  count:number = 0;
  a:number
  b:number
  c:number;
  nom:string;
  email:string;
  phone:string;
  about:string;
  
HEROES = [
   {id: 1, name:'Superman'},
   {id: 2, name:'Batman'},
   {id: 5, name:'BatGirl'},
   {id: 3, name:'Robin'},
   {id: 4, name:'Flash'}
];

  constructor() {
    console.log('Constructor() called');

   }

  ngOnInit() {
    console.log('ngOnInit() called');

    this.nom = "azert"
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }
 

  callfunction(){
    this.count ++;
  }

  increment(){
    this.count ++;
  }

  decrement(){
    this.count --;
  }
somme(){
  this.c = this.a + this.b
}
save(){
  let data = {
    "name":this.nom,
    "email":this.email,
    "about":this.about,
    "phone":this.phone,
  }
  console.log(data)
}
}
