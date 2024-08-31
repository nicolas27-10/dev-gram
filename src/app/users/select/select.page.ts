import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage  {

  

  selectedOption: string | undefined;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {}

  onButtonClick(option: string, event: Event) {
    event.stopPropagation();
    if (this.selectedOption === option) {
      this.selectedOption = undefined; // Deselecciona si ya estaba seleccionado
    } else {
      this.selectedOption = option; // Selecciona la nueva opción
    }
  }

  resetSelection(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('ion-button')) {
      this.selectedOption = undefined;
    }
  }

  async aceptar() {
    if (this.selectedOption === 'dev') {
      this.navCtrl.navigateForward('/reg-dev');
    } else if (this.selectedOption === 'cli') {
      this.navCtrl.navigateForward('/reg-cli');
    } else {
      // Si no se ha seleccionado ninguna opción, puedes manejarlo aquí
      console.log('Por favor, selecciona una opción antes de continuar.');

      const alert = await this.alertCtrl.create({
        header: 'Selección requerida',
        message: 'Por favor, selecciona una opción antes de continuar.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  }

}


