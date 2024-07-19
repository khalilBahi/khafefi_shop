import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AjouterProductComponent } from './ajouter-product/ajouter-product.component';
import { ListeProductComponent } from './liste-product/liste-product.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ListeCommandComponent } from './liste-command/liste-command.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component'

@NgModule({
  declarations: [
    AppComponent,
    AjouterAdminComponent,
    FooterComponent,
    HeaderComponent,
    ListeAdminComponent,
    LoginComponent,
    MenuComponent,
    AjouterProductComponent,
    ListeProductComponent,
    ListeClientComponent,
    ListeCommandComponent,
    ListeContactComponent,
    DashboardComponent,
    ModifierAdminComponent
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
