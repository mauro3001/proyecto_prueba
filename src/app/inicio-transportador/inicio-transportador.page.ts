import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Oferta } from '../ofertas/oferta.model';
import { OfertaService } from '../ofertas/oferta.service';

//page importada de ofertas
import { OfertasPage } from '../ofertas/ofertas.page';

@Component({
  selector: 'app-inicio-transportador',
  templateUrl: './inicio-transportador.page.html',
  styleUrls: ['./inicio-transportador.page.scss'],
})

export class InicioTransportadorPage implements OnInit {

  oferta : Oferta;
  public ofertas = [
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
  ];

  constructor( public router: Router, private menu: MenuController, public modalController: ModalController, private ofertaService: OfertaService) { }

  ngOnInit() {
  }

  openMenu(){
    this.menu.open();
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: OfertasPage,
      cssClass: 'my-modal-class'
    });
    return await modal.present();
  }

}
