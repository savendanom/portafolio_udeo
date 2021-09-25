import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
   info : infoPagina = {};
  cargada = false;
  constructor(private http: HttpClient) {
    // console.log("servicio inicializado");
    //subcripcion
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: infoPagina) => {
      // console.log(resp);
      this.cargada = true;
      this.info = resp;
      // console.log(resp.tublr);
    })
  }
}
