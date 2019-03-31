import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
titre:string;
type:string;
description:string;
price:string;
  constructor(private http:HttpClient, private route: Router) { }
  private imageSrc: string = '';

  ngOnInit() {
  }

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }

  save(){
    let data={
      'title':this.titre,
      'product_type':this.type,
      'description':this.type,
      'price':this.type,
      'photo': this.imageSrc
    }
    this.http.post('http://localhost:3000/produits',data).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/'])

    })

  }
}
