import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productos, Producto } from '../interfaces/productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  info : Producto[] = [];

  constructor(private http: HttpClient) {
    console.log("servicio inicializado");
    //subcripcion
    this.http.get('assets/data/data-productos.json')
    .subscribe((resp: any) => {
      console.log(resp.productos);
      this.info = resp.productos;
    })
  }
}
