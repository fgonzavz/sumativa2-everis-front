export interface Producto {
    id?: number;
    nombre?: string;
    descripcion?: string;
    img?: string;
}

export interface RootObject {
    productos: Producto[];
  }
  
 