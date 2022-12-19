import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
    this.form = this.fb.group({
      user: ['',Validators.required],
      pass: ['',Validators.required]
    })
  }

  ngOnInit(): void{

  }

  ingresar(){
    const usuario = this.form.value.user;
    const password = this.form.value.pass;

    if(usuario == "4" && password =="1234"){
      this.router.navigate(['dashboard'])
    }else if(usuario == "3" && password =="1234"){

    }else{
      this.error();
    }

  }

  error(){
    this._snackBar.open('Usuario y/o Contraseña Incorrectos','',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000
    })
  }
}
