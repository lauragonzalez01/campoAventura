import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPoliciesDialogComponent } from './confirm-policies-dialog/confirm-policies-dialog.component';
import { reduce } from 'rxjs';

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

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmPoliciesDialogComponent, {});
    dialogRef.afterClosed().subscribe(res => { console.log(res) });
  }
}