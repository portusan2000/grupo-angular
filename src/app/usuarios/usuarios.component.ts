import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUsuario } from '../models/user.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  constructor(public auth: AuthService) { }

  ngOnInit() {
    // Cargar en el arreglo los valores del LocalStorage
    this.auth.datos = JSON.parse(localStorage.getItem('data'));
  }

}
