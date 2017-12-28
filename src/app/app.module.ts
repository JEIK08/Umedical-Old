import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Clases
import { Animation } from './classes/animation';

//Rutas
import { APP_ROUTING } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReceptionComponent } from './components/reception/reception.component';
import { NewPatientComponent } from './components/reception/new-patient/new-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReceptionComponent,
    NewPatientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [Animation],
  bootstrap: [AppComponent]
})
export class AppModule { }
