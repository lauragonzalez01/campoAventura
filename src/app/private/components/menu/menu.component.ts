import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  selectedIndex = document.querySelector("a");
  menu: any = [
    { id: 1, name: 'El campo', routerLink: 'campo', },
    { id: 2, name: 'El equipo', routerLink: 'equipo' },
/*     { id: 3, name: 'Temáticas', routerLink: 'tematicas' },
    { id: 4, name: 'Temporadas', routerLink: 'temporadas' },
    { id: 5, name: 'Un campo seguro', routerLink: 'campo-seguro' },
    { id: 6, name: 'Galeria', routerLink: 'galeria' },
    { id: 7, name: 'FAQ', routerLink: 'FAQ' }, */
    { id: 8, name: 'Inscripciones', routerLink: 'inscripciones' }
  ];



}
