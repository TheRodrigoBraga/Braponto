import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'braponto-front';

  selected_funcionario = {id: '', matricula: '', nome: ''}

  funcionarios = [
    {id: 1, nome: 'dale', matricula: 1},
    {id: 2, nome: 'daleee', matricula: 2},
    {id: 3, nome: 'daleeeee', matricula: 3}
  ];

  constructor(private api:ApiService){
    this.getFuncionarios()
  }

  getFuncionarios = () => {
    this.api.getAllFuncionarios().subscribe(
      data => {
        this.funcionarios = data
      },
      error => {
        console.log('Aconteceu um erro.', error.message)
      }
    )
  }


  FuncionarioSelect = (funcionario:any) => {
    this.api.getFuncionario(funcionario.id).subscribe(
      data => {
        console.log(data)
        this.selected_funcionario = data
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
  }
}
