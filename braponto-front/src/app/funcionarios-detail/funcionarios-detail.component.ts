import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-funcionarios-detail',
  templateUrl: './funcionarios-detail.component.html',
  styleUrls: ['./funcionarios-detail.component.css']
})
export class FuncionariosDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api:ApiService) { }

  selected_funcionario = {id: '', matricula: '', nome: ''}

  ngOnInit(): void {
    this.loadFuncionarios()
  }

  loadFuncionarios() {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.api.getFuncionario(id).subscribe(
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
