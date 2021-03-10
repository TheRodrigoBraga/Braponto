import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FuncionariosDetailComponent } from './funcionarios-detail/funcionarios-detail.component';
import { HomeComponent } from './home/home.component';
import { NewFuncionarioComponent } from './new-funcionario/new-funcionario.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'funcionarios-detail', redirectTo: 'funcionarios-detail', pathMatch: 'full', component: FuncionariosDetailComponent },
  { path: 'new-funcionario', redirectTo: 'new-funcionario', pathMatch: 'full', component: NewFuncionarioComponent },
  { path: 'registro', redirectTo: 'registro', pathMatch: 'full', component: RegistroComponent},
  { path: 'home', redirectTo: 'home', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ FuncionariosDetailComponent, RegistroComponent ]
