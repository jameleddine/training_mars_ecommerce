import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:'./application/application.module#ApplicationModule'},
  {path:'login',loadChildren:'./connexion/connexion.module#ConnexionModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
