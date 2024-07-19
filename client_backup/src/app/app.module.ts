import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { RegistreClientComponent } from './registre-client/registre-client.component';
import { ContactClientComponent } from './contact-client/contact-client.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OffreComponent } from './offre/offre.component';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MesreservationComponent } from './mesreservation/mesreservation.component';
import { ChargementComponent } from './chargement/chargement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginClientComponent,
    RegistreClientComponent,
    ContactClientComponent,
    HomeComponent,
    AboutComponent,
    OffreComponent,
    ProduitComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    MesreservationComponent,
    ChargementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
