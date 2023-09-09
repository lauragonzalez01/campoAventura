import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  links: any = [
    { description: 'Quiénes somos', routerLink: 'campo' },
    { description: 'Únete a nuestro equipo', routerLink: 'equipo' },
    { description: 'Preguntas frecuentes', routerLink: 'FAQ' },
    { description: 'Politica de tratamiento de datos', routerLink: '' },
  ];
}
