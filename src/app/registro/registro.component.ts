import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../models/user.interface';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: IUsuario;

  public generos = [
    { value: 'F', display: 'Mujer' },
    { value: 'M', display: 'Hombre' }
];

  constructor( public auth: AuthService, private router: Router ) {}

  ngOnInit() {
    this.inicializaFormRegister();
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return
    }
    console.log('Datos de Registro', f.value);
    this.auth.datos.push(f.value);
    this.auth.cargarStorage();
    f.resetForm();
    this.inicializaFormRegister();
    this.router.navigate[('inicio')];
  }

  inicializaFormRegister() {
    this.user = {
      nombre: '',
      email: '',
      fechaNac: '',
      telefono: '',
      sexo: this.generos[0].value,
    }
  }

}
