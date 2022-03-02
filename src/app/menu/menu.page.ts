import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado = 0;
  paginas=[];

  infoUser = JSON.parse(localStorage.getItem('usuario'));

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
    if(this.infoUser.tipoUser === 'comprador'){
      this.paginas=[
        {
          titulo: 'Inicio comprador',
          url: '/menu/inicio-comprador',
          icono:'home'
        },
        {
          titulo: 'Información personal',
          url: '/menu/informacion-personal',
          icono: 'person'
        },
      ];
    };
    if(this.infoUser.tipoUser === 'transportador'){
      this.paginas=[
        {
          titulo: 'Inicio transportador',
          url: '/menu/inicio-transportador',
          icono:'home'
        },
        {
          titulo: 'Información personal',
          url: '/menu/informacion-personal',
          icono: 'person'
        },
      ];
    };
   }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Desea realmente cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        },
        {
          text: 'Aceptar',
          handler: () =>{
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();
  }
}
