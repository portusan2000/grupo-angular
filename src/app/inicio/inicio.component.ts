import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from '../models/user.interface';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: IUsuario;
  idUsuario: number;

  constructor(public auth:AuthService, private router: Router) { }

  ngOnInit() {
    this.user = {
      nombre: '',
      email: '',
      fechaNac: '',
      telefono: '',
      sexo: '',
    }
    // Cargar en el arreglo los valores del LocalStorage
    this.auth.datos = JSON.parse(localStorage.getItem('data'));
  }

  editarDato(id: number, usuario: IUsuario) {
    console.log('Vamos a editar', {usuario, id});
    this.user = usuario;
    this.idUsuario = id;
  }

  onSubmit(f: NgForm) {
    console.log('Dato a guardar', f.value);
    console.log('ID del dato', this.idUsuario);
    this.auth.actualizaDatos();
  }

  cancelar(f: NgForm) {
    f.resetForm();
  }


}
