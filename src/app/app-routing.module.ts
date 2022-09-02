import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudProductos } from './crud-productos/crud-productos.component';
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: HomeComponent
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'crud-productos',
    component: CrudProductos
  },
  {
    path: '**',
    component: HomeComponent
  },
  {
    path: 'paciente',
  component: PacienteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
