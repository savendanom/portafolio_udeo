import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-descripcion',
  templateUrl: './productos-descripcion.component.html',
  styleUrls: ['./productos-descripcion.component.css']
})
export class ProductosDescripcionComponent implements OnInit {
  parametros:any;
  constructor(private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.parametros = params;
      console.log('parametros: ', this.parametros);
    });
  }

}
