import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../Entity/Client.Entity';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

  messageCommande = "";
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CrudService,
    private router: Router
  ) {
    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      mdp: new FormControl('', [
        Validators.required
      ])
    }

    this.loginForm = this.fb.group(formControls);
  }

  ngOnInit(): void {
    // La méthode ngOnInit() est vide car elle n'est pas utilisée.
  }

  get email() { return this.loginForm.get('email'); }
  get mdp() { return this.loginForm.get('mdp'); }

  login() {
    if (this.loginForm.valid) {
      let data = this.loginForm.value;
      let client = new Client(null, null, null, data.email, data.mdp);
      this.service.loginClient(client).subscribe(
        res => {
          console.log(res);
          this.messageCommande = `<div class="alert alert-success" role="alert">
            Connexion réussie
          </div>`;
          let token = res.token;
          localStorage.setItem("myToken", token);
          this.router.navigate(['']).then(() => { window.location.reload(); });
        },
        err => {
          console.log(err);
          this.messageCommande = `<div class="alert alert-danger" role="alert">
            Échec de la connexion
          </div>`;
        }
      )
    } else {
      this.messageCommande = `<div class="alert alert-warning" role="alert">
        Veuillez remplir tous les champs
      </div>`;
    }
  }
}
