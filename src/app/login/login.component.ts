import { SesionService } from 'src/app/services/sesion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Validacion } from 'src/app/utils/validacion';
import { Usuario } from './../model/usuario';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  registro: FormGroup;
  usuario: Usuario = new Usuario();
  visible:boolean= false;
  constructor( private formBuilder: FormBuilder,
    public usuarioService: UsuarioService,
    public seseionService: SesionService,
    private router: Router) {

    this.login = this.formBuilder.group({
      email: Validacion.getCampo(true),
      password: Validacion.getCampo(true),
    });

    this.registro = this.formBuilder.group({
      cedula: Validacion.getCampo(true),
      email: Validacion.getCampo(true),
      nombres: Validacion.getCampo(true),
      apellidos: Validacion.getCampo(true),
      password: Validacion.getCampo(true),
    });
    this.usuario.email = "";
    this.usuario.password = "";
  }

  ngOnInit() {
  }

  getControls(key: string) {

    return this.login.controls[key];
  }


  async onSubmit() {

    if (this.login.invalid) {
      return;
    }
    this.visible = true;

    this.usuarioService
      .post('usuario/login', { email: this.usuario.email, password: this.usuario.password })
      .subscribe(
        async usuario => {
          this.usuario = usuario;
          this.seseionService.setUser(this.usuario);
          this.router.navigate(["market"]);
          this.visible = false;
        },
        async fault => {
          this.visible = false;
        },
        () => {
          this.visible = false;
        }
      );
  }

  onSubmitRegistro(){

    if (this.registro.invalid) {
      return;
    }
    this.visible = true;
    this.usuario.direccion="prueba";
    this.usuario.celular=3115907758;

    this.usuarioService
      .post('usuario/singIn', this.usuario)
      .subscribe(
        async usuario => {
          this.usuario = usuario;
          this.seseionService.setUser(this.usuario);
          this.router.navigate(["market"]);
          this.visible = false;
        },
        async fault => {
          this.visible = false;
        },
        () => {
          this.visible = false;
        }
      );
  }

}
