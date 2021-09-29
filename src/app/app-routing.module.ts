import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './productos/producto/producto.component';
import { LoginComponent } from './sesion/login/login.component';
import { RegistroComponent } from './sesion/registro/registro.component';
import { HombreComponent } from './productos/hombre/hombre.component';
import { MujerComponent } from './productos/mujer/mujer.component';
import { NiniosComponent } from './productos/ninios/ninios.component';
import { DestacadoComponent } from './productos/destacado/destacado.component';
import { ProximamenteComponent } from './productos/proximamente/proximamente.component';



const routes: Routes = [

  //{ path:'', component: ProductoComponent },
  {path:'',component: LoginComponent},
  {path:'inicio',component: ProductoComponent},
  {path:'registro',component: RegistroComponent},
  {path:'hombre',component: HombreComponent},
  {path:'mujer',component: MujerComponent},
  {path:'ninio',component: NiniosComponent},
  {path:'destacado',component: DestacadoComponent},
  {path:'proximamente',component: ProximamenteComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
