import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-funcionario',
  templateUrl: './new-funcionario.component.html',
  styleUrls: ['./new-funcionario.component.css']
})
export class NewFuncionarioComponent implements OnInit {
  funcionario = {nome: '', matricula: ''}

  funcionarios = [
    {id: 1, nome: 'Carregando...', matricula: 1},
    {id: 2, nome: 'Carregando...', matricula: 2},
    {id: 3, nome: 'Carregando...', matricula: 3}
  ];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.api.saveNewFuncionario(this.funcionario).subscribe(
      data => {
        this.funcionarios.push(data)
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
    this.router.navigate(['funcionarios-detail'])
  }

}