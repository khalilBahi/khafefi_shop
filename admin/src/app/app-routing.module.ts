import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { LoginComponent } from './login/login.component';
import { AjouterProductComponent } from './ajouter-product/ajouter-product.component';
import { ListeProductComponent } from './liste-product/liste-product.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ListeContactComponent } from './liste-contact/liste-contact.component';
import { ListeCommandComponent } from './liste-command/liste-command.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { AuthGuard } from './Service/Auth.service';

const routes: Routes = [
  {path:'dash',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'AjouterAdmin',component:AjouterAdminComponent,canActivate:[AuthGuard]},
    {path:'ListeAdmin',component:ListeAdminComponent,canActivate:[AuthGuard]},
    {path:'',component:LoginComponent},
    {path:'AjouterProduct',component:AjouterProductComponent,canActivate:[AuthGuard]},
    {path:'ListeProduct',component:ListeProductComponent,canActivate:[AuthGuard]},
    {path:'ListeClient',component:ListeClientComponent,canActivate:[AuthGuard]},
    {path:'ListeContact',component:ListeContactComponent,canActivate:[AuthGuard]},
    {path:'ListeCommand',component:ListeCommandComponent,canActivate:[AuthGuard]},
    {path:'ModifierAdmin/:id',component:ModifierAdminComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
