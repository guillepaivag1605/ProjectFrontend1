import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { CrudProductos } from './crud-productos/crud-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ReservaComponent } from './reserva/reserva.component';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';
import { AgregarFichaComponent } from './agregar-ficha/agregar-ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    CrudProductos,
    MenuComponent,

    PacienteComponent,
    ReservaComponent,
    FichaClinicaComponent,
    AgregarFichaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
