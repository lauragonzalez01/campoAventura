import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent {
  yesNotQuestion: any = [
    { id: true, descripcion: 'Si' },
    { id: false, descripcion: 'No' }
  ];
  clanList: any = [
    { id: false, descripcion: 'Aer (Aire)' },
    { id: false, descripcion: 'Aqua (Agua)' },
    { id: false, descripcion: 'Ignis (Fuego)' },
    { id: false, descripcion: 'Terra (Tierra)' },
    { id: false, descripcion: 'No recuerdo' },
  ];
}