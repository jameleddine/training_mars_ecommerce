import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import {Produit} from './../entities/produit.entity';
import swal from 'sweetalert';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
  providers: [CrudService]
})
export class GestionComponent implements OnInit {
  id:any;
  produit:Produit = new Produit();
  constructor(private route: ActivatedRoute, private crud:CrudService, private re:Router) { 
    /**
     * activatedRoute = Information about current route
     * Router = for navigation
     */
    this.route.params.subscribe(res=>{
      this.id = res.id;
    })
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
    this.produit.photo = reader.result;
  }

  ngOnInit() {

    this.crud.getByID(this.id).subscribe(res=>{
      this.produit = <Produit>res;
      console.log(this.produit)
    })

  }
  save(){
    console.log(this.produit)
    this.crud.updateById(this.id,this.produit).subscribe(res=>{
      console.log(res);
      this.re.navigate(['/']);
    })
  }
  delete(){

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your product has been deleted!", {
          icon: "success",
        });
        console.log(this.produit)
    this.crud.deleteById(this.id).subscribe(res=>{
      this.re.navigate(['/']);
    })
      } else {
        swal("Your product is safe!");
      }
    });


    
  }

}
