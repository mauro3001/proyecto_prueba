import { Component, OnInit, ViewChild, ElementRef} from  '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  @ViewChild('passwordCheckRegister', { read: ElementRef }) passwordEye: ElementRef;
  passwordTypeInput1  =  'password';
  passwordTypeInput2  =  'password';

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioRegistro = this.fb.group({
      tipoUser: new FormControl('',Validators.required),
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmacionPassword: new FormControl('', Validators.required)
    });
  }
  togglePasswordMode() {
    //cambiar tipo input
    this.passwordTypeInput1 = this.passwordTypeInput1 === 'text' ? 'password' : 'text';
    this.passwordTypeInput2 = this.passwordTypeInput2 === 'text' ? 'password' : 'text';
  }

  ngOnInit() {
  }

  async guardar(){
    const f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos o incorrectos',
        message: 'Tiene que llenar todos los espacio y escribirlos correctamente',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    if(this.formularioRegistro.value.password === this.formularioRegistro.value.confirmacionPassword){
      const usuario ={
        tipoUser: f.tipoUser,
        nombre: f.nombre,
        password: f.password,
        email: f.email
      };
      localStorage.setItem('usuario',JSON.stringify(usuario));
      if(this.formularioRegistro.value.tipoUser === 'comprador'){
        this.navCtrl.navigateRoot('menu/inicio-comprador');
      }
      if(this.formularioRegistro.value.tipoUser === 'transportador'){
        this.navCtrl.navigateRoot('menu/inicio-transportador');
      }
      if(this.formularioRegistro.value.tipoUser === 'vendedor'){
        this.navCtrl.navigateRoot('menu/inicio-vendedor');
      }
      localStorage.setItem('ingresado','true');
      const alert = await this.alertController.create({
        header: 'Confirmación',
        message: 'Su cuenta se ha creado exitosamente',
        buttons: ['Continuar']
      });
      await alert.present();
      return;

    }else{
      const alert = await this.alertController.create({
        header: 'Contraseña incorrecta',
        message: 'La contraseña no coincide con la confirmación de la contraseña',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

  }

}
