import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { LoginComponent } from './sesion/login/login.component';
import { RegistroComponent } from './sesion/registro/registro.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { HombreComponent } from './productos/hombre/hombre.component';
import { MujerComponent } from './productos/mujer/mujer.component';
import { NiniosComponent } from './productos/ninios/ninios.component';
import { DestacadoComponent } from './productos/destacado/destacado.component';
import { ProximamenteComponent } from './productos/proximamente/proximamente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    ProductoComponent,
    HombreComponent,
    MujerComponent,
    NiniosComponent,
    DestacadoComponent,
    ProximamenteComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
