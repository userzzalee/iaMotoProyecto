export type MotoType = 
  | 'deportiva' 
  | 'scooter' 
  | 'naked' 
  | 'off-road' 
  | 'custom' 
  | 'turismo';

export interface Moto {
  id: string;
  nombre: string;
  tipo: MotoType;
  precio: number;
  imagen: string;
  marca: string;
  modelo: string;
  cilindrada: number;
  descripcion: string;
  stock: number;
}

export interface CartItem {
  moto: Moto;
  cantidad: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}