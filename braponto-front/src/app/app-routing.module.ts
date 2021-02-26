import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosDetailComponent } from './funcionarios-detail/funcionarios-detail.component';

const routes: Routes = [
  { path: 'funcionarios-detail/:id', component: FuncionariosDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ FuncionariosDetailComponent ]
