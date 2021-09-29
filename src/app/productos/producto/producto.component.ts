import { Component, OnInit } from '@angular/core';
import { ProductosService }  from 'src/app/services/productos.service'; 

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
  }

}
