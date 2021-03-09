import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro = {funcionario: '', dia: '', primeiro_registro: '00:00:00', segundo_registro: '00:00:00', terceiro_registro: '00:00:00', quarto_registro: '08:00:00'}

  constructor(private route: ActivatedRoute, private api: ApiService, private appComponent: AppComponent, private router: Router) { }

  selected_funcionario = {id: '', matricula: '', nome: ''}

  registros = [
    {funcionario:{},dia: '01/01/2020', primeiro_registro: '08:00:00', segundo_registro: '12:00:00', terceiro_registro: '13:00:00', quarto_registro: '18:00:00'},
  ];

  registrosAtt = [
    {funcionario:{},dia: '01/01/2020', primeiro_registro: '08:00:00', segundo_registro: '12:00:00', terceiro_registro: '13:00:00', quarto_registro: '18:00:00'},
  ];

  dias = ['']
  
  funcionarios = [
    {id: 1, nome: 'Carregando...', matricula: 1},
    {id: 2, nome: 'Carregando...', matricula: 2},
    {id: 3, nome: 'Carregando...', matricula: 3}
  ];

  selected_id:any

  dataAtual = new Date; dia:any; mes:any; ano:any; diaCompleto:any

  abrirFechar = true

  ngOnInit(): void {
    this.getRegistros(),
    this.getFuncionarios(),
    this.funcionarioSelect(this.funcionarios),
    this.dataAjustada()
  }

  organizaData (dia:string) {
      let a = dia.substr(0, 4)
      let m = dia.substr(5, 2)
      let d = dia.substr(8, 2)
      return `${d}-${m}-${a}`
  }

  getRegistros = () => {
    this.api.getAllRegistros().subscribe(
      data => {
          this.registros = data
      },
      error => {
        console.log('Aconteceu um erro.', error.message)
      }
    )
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

  saveRegistro() {
    this.registro.funcionario = this.selected_funcionario.id
    this.api.saveNewRegistro(this.registro).subscribe(
      data => {
        this.registros.push(data)
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
  }

  funcionarioSelect(funcionario:any){
    this.dias = []
    this.registrosAtt = []
    this.selected_funcionario = funcionario
    for (const r in this.registros) {
          if(this.selected_funcionario.id == this.registros[r].funcionario)
              this.registrosAtt.push(this.registros[r])      
    }
    for (const r in this.registrosAtt){
      this.dias.push(this.organizaData(this.registrosAtt[r].dia))
    }
    for (const r in this.registrosAtt){
      this.registrosAtt[r].dia = this.dias[r]
    }
  }
  
  getClass(){
    if(this.selected_funcionario.id == undefined){
      return 'esconder'
    }else
      return 'nada'
  }

  abrirRegistroManual(){
    if(this.abrirFechar){
      return 'esconder'
    }else
      return ''
  }

  mostrarEsconder(){
    if(this.abrirFechar == true){
      this.abrirFechar = false
    }else{
      this.abrirFechar = true
    }
  }

  dataAjustada(){
    this.dia = this.dataAtual.getDate()
    this.mes = this.dataAtual.getMonth() + 1
    this.ano = this.dataAtual.getUTCFullYear()
    if(this.dia < 10)
      this.dia = 0 + '' + this.dia
    if(this.mes < 10)
      this.mes = 0 + '' + this.mes
    this.diaCompleto = this.dia + '/' + this.mes + '/' + this.ano
  }

}
