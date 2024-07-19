import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginClientComponent } from './login-client/login-client.component';
import { RegistreClientComponent } from './registre-client/registre-client.component';
import { HomeComponent } from './home/home.component';
import { ContactClientComponent } from './contact-client/contact-client.component';
import { AboutComponent } from './about/about.component';
import { OffreComponent } from './offre/offre.component';
import { ProduitComponent } from './produit/produit.component';
import { MesreservationComponent } from './mesreservation/mesreservation.component';
import { AuthGuard } from './service/Auyh.service';

const routes: Routes = [
  {path:'registre',component:RegistreClientComponent},
  {path:'LoginClient',component:LoginClientComponent},
  {path:'',component:HomeComponent},
  {path:'Contact',component:ContactClientComponent},
  {path:'About',component:AboutComponent},
  {path:'Offre',component:OffreComponent},
  {path:'ProduitDetails',component:ProduitComponent},
  {path:'mesreservations',component:MesreservationComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
