import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { SeviceLocalStorageService } from '../servicios/sevice-local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sesion:any;
  vista=1;
  constructor(private _SlocalStorage: SeviceLocalStorageService) {

  }

  ngOnInit(): void {
    this.sesion =  this._SlocalStorage.getJsonValue('SesionUser')
    console.log(this.sesion);
    
  }
  clicknav(id){
    this.vista = id 
  }
}
