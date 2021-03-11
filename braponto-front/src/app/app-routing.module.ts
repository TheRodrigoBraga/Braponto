import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FuncionariosDetailComponent } from './funcionarios-detail/funcionarios-detail.component';
import { HomeComponent } from './home/home.component';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'funcionarios-detail', component: FuncionariosDetailComponent },
  { path: 'funcionarios-detail/:id', component: FuncionariosDetailComponent },
  { path: 'new-funcionario', component: NewFuncionarioComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ FuncionariosDetailComponent, RegistroComponent ]
