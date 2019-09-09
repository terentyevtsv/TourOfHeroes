import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"; // импорт Для двойной привязки [(ngModel)]

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   // Применение модуля форм для двойной привязки
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
