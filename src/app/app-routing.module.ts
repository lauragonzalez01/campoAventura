import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FAQComponent } from './private/components/faq/faq.component';
import { FieldComponent } from './private/components/field/field.component';
import { GalleryComponent } from './private/components/gallery/gallery.component';
import { HomeComponent } from './private/components/home/home.component';
import { RegistrationsComponent } from './private/components/registrations/registrations.component';
import { SafeFieldComponent } from './private/components/safe-field/safe-field.component';
import { SeasonsComponent } from './private/components/seasons/seasons.component';
import { TeamComponent } from './private/components/team/team.component';
import { ThemesComponent } from './private/components/themes/themes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'campo', component: FieldComponent },
  { path: 'campo-seguro', component: SafeFieldComponent },
  { path: 'equipo', component: TeamComponent },
  { path: 'FAQ', component: FAQComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'inscripciones', component: RegistrationsComponent },
  { path: 'tematicas', component: ThemesComponent },
  { path: 'temporadas', component: SeasonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
