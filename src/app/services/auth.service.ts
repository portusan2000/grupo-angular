import { Injectable } from '@angular/core';
import { IUsuario } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: IUsuario;
  datos: IUsuario[] = [];

  constructor() { }

  cargarStorage() {
    // Cargo en el LocalStorage un arreglo
    localStorage.setItem('data', JSON.stringify(this.datos));
  }

  actualizaDatos() {
    this.datos.forEach(resp => {
      console.log('Leyendo arreglo',resp);
      this.cargarStorage();
    })
  }


}
