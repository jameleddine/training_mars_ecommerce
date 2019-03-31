import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
myform: FormGroup;
  constructor() { }

  ngOnInit() {
    this.myform = new FormGroup(
      {
        name: new FormControl('',Validators.required),
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(8)])
      }
    )
  }
  showData(){
    console.log(this.myform.value)
  }

}
