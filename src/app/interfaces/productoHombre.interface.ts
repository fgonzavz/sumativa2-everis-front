
export interface ProductoHombre {
    id?: number;
    nombre?: string;
    descripcion?: string;
    img?: string;
    precio?:number;
}


export interface RootObject {
    productos: ProductoHombre[];
  }
  
 