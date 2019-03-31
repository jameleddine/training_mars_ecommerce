import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './../../services/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [CrudService]
})
export class DashboardComponent implements OnInit {
 products: any = [];
  constructor(private http: HttpClient, private crud: CrudService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.crud.getAll().subscribe(res=>{
      this.products = res;
      })

    // this.http.get('http://localhost:3000/produits').subscribe(res=>{
    // this.products = res;
    // })
 }
}
