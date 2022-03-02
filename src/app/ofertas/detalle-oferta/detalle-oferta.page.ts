import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../oferta.model';
import { OfertaService } from '../oferta.service';

@Component({
  selector: 'app-detalle-oferta',
  templateUrl: './detalle-oferta.page.html',
  styleUrls: ['./detalle-oferta.page.scss'],
})

export class DetalleOfertaPage implements OnInit {
  
  oferta : Oferta;

  constructor(private activateRoute: ActivatedRoute, private ofertaService: OfertaService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('productoId')
      this.oferta = this.ofertaService.getOferta(recipeId);
      console.log(this.oferta);
    })
  }

}
