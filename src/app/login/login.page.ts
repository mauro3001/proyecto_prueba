import { Component, OnInit, ViewChild, ElementRef} from  '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  @ViewChild('passwordEyeRegister', { read: ElementRef }) passwordEye: ElementRef;
  passwordTypeInput  =  'password';
  formularioLogin: FormGroup;
  constructor(public fb: FormBuilder,
  public alertController: AlertController,
  public navCtrl: NavController) {
    this.formularioLogin = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
   }
  togglePasswordMode() {
    //cambiar tipo input
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
    //obtener el input
    const nativeEl = this.passwordEye.nativeElement.querySelector('input');
    //obtener el indice de la posición del texto actual en el input
    const inputSelection = nativeEl.selectionStart;
    //ejecuto el focus al input
    nativeEl.focus();
    //espero un milisegundo y actualizo la posición del indice del texto
    setTimeout(() => {
        nativeEl.setSelectionRange(inputSelection, inputSelection);
    }, 1);
  }

  ngOnInit() {
  }

  async ingresar(){
    const f = this.formularioLogin.value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if((usuario.email === f.email) && (usuario.password === f.password)){
        console.log('Ingresado');
        localStorage.setItem('ingresado','true');
        if((usuario.tipoUser === 'vendedor')){
          this.navCtrl.navigateRoot('inicio-vendedor');
        }
        if((usuario.tipoUser === 'comprador')){
          this.navCtrl.navigateRoot('menu/inicio-comprador');
        }
        if((usuario.tipoUser === 'transportador')){
          this.navCtrl.navigateRoot('inicio-transportador');
        }
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }

}
