import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaCompraComponent,
    MiListaComponent,
    MiContadorComponent,
    PokedexComponent,
    PokemonComponent,
    PokemonCardComponent,
    PokemonCardV2Component,
    EquipoPokemonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, authRou],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}