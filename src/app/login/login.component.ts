import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeviceLocalStorageService } from '../servicios/sevice-local-storage.service';
import { UsuariosService } from '../servicios/usuarios.service';
// import { UsuariosService } from '../servicios/usuarios.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  usuario = {
    authType: 'ldap',
    username: 'ldapadministrator',
    password: '1005422373'
  }


  constructor(private usuarioService: UsuariosService, private _router: Router, private _SlocalStorage:SeviceLocalStorageService) {
  }
  ngOnInit(): void {
   this._SlocalStorage.clearToken()
  }

  usuarios: any = [];


  enviar() {
    this.usuarioService.LoguearApi(this.usuario).subscribe(
      (resp: any) => {
        let empleado = resp.DataBeanProperties.ObjectValue
        if (empleado.DataBeanProperties.Empleado != null) {

          let usuarioE = resp.DataBeanProperties.ObjectValue.DataBeanProperties.Empleado.DataBeanProperties;
          // localStorage.setItem("usuarioLoguado", btoa(encodeURIComponent(JSON.stringify(usuarioE))));
          this._SlocalStorage.setJsonValue('SesionUser',usuarioE);       
          this._router.navigate(['home']);

        } else {
          alert("No se encontro el usuario");
        }
      }
    );
  }
}
