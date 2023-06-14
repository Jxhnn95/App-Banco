import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { PagesComponent } from './pages/pages.component';
import { TransferenciasRecibidasComponent } from './pages/transferencias-recibidas/transferencias-recibidas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranferenciaEnviadasComponent } from './pages/tranferencia-enviadas/tranferencia-enviadas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    PagesComponent,
    TransferenciasRecibidasComponent,
    DashboardComponent,
    TranferenciaEnviadasComponent
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
    //falta aqui




  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, authRouter],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}