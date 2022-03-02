import { Injectable } from '@angular/core';
import {Producto} from './producto.model';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  private productos: Producto[]=[
    {
      id: '1',
      title: 'Naranja valenciana',
      cantidad: 10,
      unidadesRef:'Canasta (11 kg cada una)',
      precio: 15000,
      imageURL: 'https://aleluyamarket.com/wp-content/uploads/2021/06/Naranja-Valencia.jpg',
      comments: ['Naranjas deliciosas', 'Buen precio'],
      nameVend: 'Pedro Gutierrez'
    },
    {
      id: '2',
      title: 'Papa pastusa',
      cantidad: 50,
      unidadesRef:'Kilogramos',
      precio: 4000,
      imageURL: 'https://lagranjafruver.com.co/wp-content/uploads/2020/12/papa-pastusa-pareja_1.jpg',
      comments: ['Papas deliciosas', 'Buen precio'],
      nameVend: 'Pedro Gutierrez'
    },
    {
      id: '3',
      title: 'Papa pastusa',
      cantidad: 10,
      unidadesRef:'Bultos (50 kg cada uno)',
      precio:20000,
      imageURL: 'https://lagranjafruver.com.co/wp-content/uploads/2020/12/papa-pastusa-pareja_1.jpg',
      comments: ['Es costoso, pero vale la pena pagar por el'],
      nameVend: 'Juan Alberto Sanchez'
    },
    {
      id: '4',
      title: 'Cebolla junca',
      cantidad: 50,
      unidadesRef:'Kilogramos',
      precio: 4000,
      imageURL: 'https://plazamercado.shop/wp-content/uploads/2020/07/cebolla-larga-paloquemao.jpg',
      comments: ['Cebolla de buena calidad'],
      nameVend: 'Juan Alberto Sanchez'
    },
    {
      id: '5',
      title: 'Yuca',
      cantidad: 50,
      unidadesRef:'Kilogramos',
      precio: 4000,
      imageURL: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2020/07/yuca.jpg',
      comments: ['No me llego la cantidad que había pedido'],
      nameVend: 'Juan Alberto Sanchez'
    }
  ];
  constructor() { }

  getProductos(){
    return [...this.productos];
  }
  getProducto(productoId: string){
    return{
      ...this.productos.find(producto => producto.id === productoId)
    };
  }
  addProducto(title: string, cantidad: number, unidadesRef: string, precio: number, imageURL: string, nameVend: string){
    this.productos.push({
      title,
      cantidad,
      unidadesRef,
      precio,
      imageURL,
      comments:[],
      nameVend,
      id: this.productos.length+1+''
    });
  }
  deleteProducto(productoId: string){
    this.productos =this.productos.filter(producto =>producto.id !== productoId);
  }
}
