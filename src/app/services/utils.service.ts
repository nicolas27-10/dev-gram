import { inject, Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadinCtrl = inject(LoadingController);

  //========Loading=========
  loading(){
    return this.loadinCtrl.create({ spinner: 'crescent'})
  }
}
