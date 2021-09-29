import { Component, OnInit } from '@angular/core';
import { ProductosHombreService }  from 'src/app/services/productosHombre.service'; 
import { ProductoHombre } from 'src/app/interfaces/productoHombre.interface';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['./hombre.component.css']
})
export class HombreComponent implements OnInit {

  carrito: ProductoHombre[] = [];


  constructor(public productosHombreService: ProductosHombreService) { }

  ngOnInit(): void {
  }

  agregar(hombre:ProductoHombre): void {
    this.carrito.push(hombre);
  }

  eliminar(hombre:ProductoHombre): void {
    let elemento = this.carrito.indexOf(hombre);
    this.carrito.splice(elemento, 1);
  }

  
  Total(carrito: ProductoHombre[]): number {
    let total: number = 0;
    for (let index = 0; index < carrito.length; index++) {
      const elemento = carrito[index];
      if(elemento.precio!=undefined) {
        total += elemento.precio;
      }
      
    }
    return total;
   
  }

      


}
