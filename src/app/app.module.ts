import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './private/components/home/home.component';
import { FieldComponent } from './private/components/field/field.component';
import { TeamComponent } from './private/components/team/team.component';
import { ThemesComponent } from './private/components/themes/themes.component';
import { SeasonsComponent } from './private/components/seasons/seasons.component';
import { SafeFieldComponent } from './private/components/safe-field/safe-field.component';
import { GalleryComponent } from './private/components/gallery/gallery.component';
import { FAQComponent } from './private/components/faq/faq.component';
import { RegistrationsComponent } from './private/components/registrations/registrations.component';
import { MenuComponent } from './private/components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FooterComponent } from './private/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FieldComponent,
    TeamComponent,
    ThemesComponent,
    SeasonsComponent,
    SafeFieldComponent,
    GalleryComponent,
    FAQComponent,
    RegistrationsComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
