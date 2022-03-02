import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { OfertaService } from './oferta.service';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  ofertas = []

  constructor( public router: Router, private menu: MenuController, public modalController: ModalController,private ofertaService: OfertaService) { }

  ngOnInit() {
    this.ofertas = this.ofertaService.getTodasOfertas();
  }

  openMenu(){
    this.menu.toggle('first');
    this.menu.open('first');
  }

  closeModal(){
    this.modalController.dismiss();
  }
}

