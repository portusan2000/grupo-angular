import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return
    }
    console.log('Datos', f.value);
    this.router.navigate(['inicio']);
  }

}
