import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-funcionarios-detail',
  templateUrl: './funcionarios-detail.component.html',
  styleUrls: ['./funcionarios-detail.component.css']
})
export class FuncionariosDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api:ApiService, private router: Router) { }

  selected_funcionario = {id: '', matricula: '', nome: ''}

  funcionarios = [
    {id: 1, nome: 'Carregando...', matricula: 1},
    {id: 2, nome: 'Carregando...', matricula: 2},
    {id: 3, nome: 'Carregando...', matricula: 3}
  ];

  selected_id:any

  ngOnInit(): void {
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

  funcionarioSelect = (funcionario:any) => {
    this.selected_funcionario = funcionario
    //this.router.navigate(['funcionarios-detail', funcionario.id])
  }

  loadFuncionarios(id:any) {
    this.api.getFuncionario(id).subscribe(
      data => {
        this.selected_funcionario = data
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
  }

  update(){
    this.api.updateFuncionario(this.selected_funcionario).subscribe(
      data => {
        this.selected_funcionario = data
        this.funcionarios
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
  }

  delete(){
    this.api.deleteFuncionario(this.selected_funcionario.id).subscribe(
      data => {
        let index = -1
        this.funcionarios.forEach((e:any, i:any) => {
          if(e.id === this.selected_funcionario.id)
            index = i
        });
        this.funcionarios.splice(index, 1)    
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
    this.selected_funcionario = {id: '', matricula: '', nome: ''}
  }

  newFuncionario() {
    this.router.navigate(['new-funcionario'])
  }

  getClass(){
    if(this.selected_funcionario.id === ''){
      return 'esconder'
    }else
      return 'nada'
  }

}
