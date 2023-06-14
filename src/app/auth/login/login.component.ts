import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private clienteService: ClienteService, private router: Router);

  validarLogin() {
    console.log('validando..', this.email, this.password);
  }

  const usuarioLogin = this.clienteService.login(this.email, this.password){
  if ( usuario ) {
    console.log( usuario );
    this.router.navigateByUrl("/pages/dashboard")
  } else {
    console.error('Credenciales incorrectas')
  }
}




}


const router: Router