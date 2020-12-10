import { Component, OnInit } from '@angular/core';
import { ServiceUnidadService } from '../servicios/service-unidad.service';

@Component({
  selector: 'app-buscador-unidad',
  templateUrl: './buscador-unidad.component.html',
  styleUrls: ['./buscador-unidad.component.css']
})
export class BuscadorUnidadComponent implements OnInit {

  constructor(private unidadService: ServiceUnidadService) { }
  respuestaUnidad;
  sigla;
  vista=false;
  ngOnInit(): void {
  }

  buscarUnidad() {
    this.unidadService.buscarUnidadxSigla(this.sigla).subscribe(
      (resp: any) => {
        console.log(resp);
        
        if(resp.DataBeanProperties.ObjectValue){
          this.vista=true;
          this.respuestaUnidad=resp.DataBeanProperties.ObjectValue.DataBeanProperties;
        }else{
          alert("No se encontro la unidad");
        }
      }
    );
  }
}
