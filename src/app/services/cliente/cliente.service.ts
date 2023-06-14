import { Injectable } from '@angular/core';
import { cliente } from 'src/app/datos/usuarios-ejemplo';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }


  login(email: string, password: string) {
    for (let i = 0; i < clientes.length; i++) {
      const cliente = clientes[i];
      if (email === clientes.correo && password= clientes.password
      return clientes;)

    }
    return null

  }
  //o
 // for(let cliente of cliente){
//  if (email===cliente.correo && password===cliente.password)
//} 


}
