import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {
  }

  async submit(){
    if (this.form.valid){

      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.signIn(this.form.value as User).then(res => {
        console.log(res);
      } ).catch(error => {
        console.log(error);
      }).finally(()=>{
        loading.dismiss();
      } )
    }
  }

}


