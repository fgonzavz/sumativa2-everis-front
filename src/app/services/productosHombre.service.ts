import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoHombre,RootObject } from '../interfaces/productoHombre.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductosHombreService {

    productos: ProductoHombre[] = [];
    carrito:string[] = [];
    constructor(private http: HttpClient) {
        this.obtenerProductos();
    }

    private obtenerProductos() {
        this.http.get('../assets/data/productoHombre.json').subscribe((resp: any) => {
            this.productos = resp.productos;
            
            
            
        });
    }

   
    

}