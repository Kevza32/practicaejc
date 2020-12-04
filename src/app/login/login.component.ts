import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
// import { UsuariosService } from '../servicios/usuarios.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  usuario = {
    user: "",
    psw: ""
  }
  constructor(private usuarioService: UsuariosService) {
  }
  ngOnInit(): void {
  }

  usuarios: any = [];


  enviar() {
    this.usuarioService.cargarTodosLosUsuarios().subscribe(
      (resp: any) => {
        if (resp.length > 0) {
          console.log("Trajo los valores");
          this.usuarios = resp;
          this.validarUsuario();
        } else {
          console.log("hibo un error con el servicio");
        }
      }
    );
  }
  validarUsuario() {
    this.usuarios.forEach(element => {
      if (element.usuario == this.usuario.user && element.contrasena == this.usuario.psw) {
        alert(`
        usuario encontrado ${element.nombre} 
        usuario: ${element.usuario} 
        contraseña ${element.contrasena}`);
      }
    });
  }
  }







/*
  this.loguear();

  login = {
    authType: 'ldap',
    username: 'ldapadministrator',
    password: '1005422373',
    hostname: '',
    ipAddress: '',
    macAddress: ''
  }
  loguear() {
  this.usuarioService.loguin(this.login).subscribe(
    (resp: any) => {
      if (resp.DataBeanProperties.ObjectValue) {
        console.log(resp.DataBeanProperties.ObjectValue);
      }
      else {
        console.log("No se puede iniciar sesion");
      }
    }
  );
} */



