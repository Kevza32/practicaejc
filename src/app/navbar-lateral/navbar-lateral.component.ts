import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../servicios/menu-service.service';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.css']
})
export class NavbarLateralComponent implements OnInit {
  listaDeMenu: any = [];
  constructor(private servicioMenu: MenuServiceService) { }

  ngOnInit(): void {
    this.obtenerMenu();
  }
  obtenerMenu() {
    this.servicioMenu.cargarMenu().subscribe(
      (resp: any) => {
        this.listaDeMenu = resp;
      });
  }
}
