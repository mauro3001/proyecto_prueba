import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleOfertaPageRoutingModule } from './detalle-oferta-routing.module';

import { DetalleOfertaPage } from './detalle-oferta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleOfertaPageRoutingModule
  ],
  declarations: [DetalleOfertaPage]
})
export class DetalleOfertaPageModule {}
