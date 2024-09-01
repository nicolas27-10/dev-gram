import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Mi Perfil', url: '/folder/Perfil', icon: 'person' },
    { title: 'Mensajes', url: 'mensajes', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  // constructor() {}
}
