import { Injectable } from '@angular/core';
import { Oferta } from '../ofertas/oferta.model'

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  public ofertas: Oferta[] = [
    {
      id : '1',
      rol1 : 'Vendedor:',
      name1 : 'Jairo Gomez',
      rol2 : 'Comprador:',
      name2 : 'Marta Lucia Peña',
      from : 'Desde:',
      desde : 'Vereda Rio Grande, Santander',
      to : 'Hasta:',
      hasta : 'Cra 12 #15-23, Bucaramanga',
      final : '50 Manojos',
      producto: 'Banano Bocadillo',
      imageUrl1 : 'https://img.fotocommunity.com/perfil-campesino-d8d0b847-ccdc-4063-95fc-1eea6240874d.jpg?height=1000',
      imageUrl2 : 'https://media.gettyimages.com/photos/actress-maisie-richardsonsellers-from-cws-legends-of-tomorrow-poses-picture-id821805582?s=612x612',
      imagePro : 'https://t4.ftcdn.net/jpg/00/94/16/55/360_F_94165545_6TQqcnzPLrmakUtJRHfNh6LB65c4H2iE.jpg',
      dia : '18/Feb/22',
      hora : '6:30 am'
    },
    {
      id : '2',
      rol1 : 'Vendedor:',
      name1 : 'Camilo Ramirez',
      rol2 : 'Comprador:',
      name2 : 'Karla Perez',
      from : 'Desde:',
      desde : 'San Bernardo, Norte de Santander',
      to : 'Hasta:',
      hasta : 'Cra 12 #15-23, Bucaramanga',
      final : '50 Racimos',
      producto: 'Platano Verde',
      imageUrl1 : 'https://comisiondelaverdad.co/images/zoo/noticias/images/Campesinos-foto-luna1.jpg',
      imageUrl2 : 'https://pymstatic.com/44253/conversions/xavier-molina-medium.jpg',
      imagePro : 'https://www.semana.com/resizer/AEcetmUovCztZonFY6mq2ZpQMGo=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/JX7PPPXC7NAGJA5FMFEOJKQGLI.PNG',
      dia : '20/Ene/22',
      hora : '9:00 am'
    },
  ];

  constructor() { }

  getTodasOfertas() {
    return [...this.ofertas]
  }
  
  getOferta(productoId: String) {
    return{
      ...this.ofertas.find(producto => {
      return producto.id === productoId
    })
    }
  }

  addOferta(){

  }

  deleteOferta(productoId : String){
    
  }
}
