import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    setInterval(() => {
      this.atualizaRelogio()
    }, 1000);
    this.getFuncionarios(),
    this.getRegistros(),
    this.apresentaData()
  }

  dataAtual = '01/01/2001'
  horarioAtual = '00:00:00'
  matriculaInfo = ''
  funcionarios = [{ id: 0, matricula: 0, nome: '' }]
  funcionarioSelected = { id: 0, matricula: 0, nome: '' }
  mensagem1 = ''
  mensagem2 = ''
  mensagem3 = ''
  registro = { id: 0, funcionario: 0, primeiro_registro: '00:00:00', segundo_registro: '00:00:00', terceiro_registro: '00:00:00', quarto_registro: '00:00:00' }
  registros = [{ id: 0, funcionario: 0, dia: '01/01/2020', primeiro_registro: '00:00:00', segundo_registro: '00:00:00', terceiro_registro: '00:00:00', quarto_registro: '00:00:00' }];
  registrosFuncionario: any

  zero(x: any) {
    if (x < 10) {
      x = '0' + x;
    } return x;
  }

  atualizaRelogio() {
    let novaHora = new Date();
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    hora = this.zero(hora)
    minuto = this.zero(minuto);
    segundo = this.zero(segundo);
    this.horarioAtual = hora + ':' + minuto + ':' + segundo;
  }

  apresentaData() {
    let novaHora = new Date();
    let dia = this.zero(novaHora.getDate())
    let mes = this.zero(novaHora.getMonth() + 1)
    let ano = novaHora.getFullYear()
    this.dataAtual = `${ano}-${mes}-${dia}`
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

  registrar() {
    this.resetar()
    this.getFuncionarios()
    this.getRegistros()
    this.registro = { id: 0, funcionario: 0, primeiro_registro: '00:00:00', segundo_registro: '00:00:00', terceiro_registro: '00:00:00', quarto_registro: '00:00:00' }
    for (const f in this.funcionarios) {
      if (this.funcionarios[f].matricula === parseInt(this.matriculaInfo)) {
        this.funcionarioSelected = this.funcionarios[f]
        this.registro.funcionario = this.funcionarioSelected.id
        this.verificaRegistra()
        this.matriculaInfo = ''
      }
    }
    if (this.funcionarioSelected.nome === '') {
      this.mensagem3 = 'enviar'
      this.matriculaInfo = ''
    }
  }

  verificaRegistra() {
    this.registrosFuncionario = []
    let registrosAntigos = []
    for (const r in this.registros) {
      if (this.registros[r].funcionario === this.funcionarioSelected.id) {
        this.registrosFuncionario.push(this.registros[r])
      }
    }
    for (const r in this.registrosFuncionario) {
      if (this.registrosFuncionario[r].dia === this.dataAtual) {
        this.verificaOcupados(this.registrosFuncionario)
      }else{
        registrosAntigos.push(this.registrosFuncionario[r])
      }
    }
    if(registrosAntigos.length === this.registrosFuncionario.length){
      this.registro.primeiro_registro = this.horarioAtual
      this.efetivarRegistro()
    }
    this.registrosFuncionario = []
  }

  verificaOcupados(registrosRecebidos:any) {
    for (const r in registrosRecebidos) {
      if (registrosRecebidos[r].dia === this.dataAtual && registrosRecebidos[r].funcionario === this.funcionarioSelected.id && registrosRecebidos[r].primeiro_registro === '00:00:00') { //CRIADO COM TODOS VAGOS
        this.registro.primeiro_registro = this.horarioAtual
        this.registro.id = registrosRecebidos[r].id
        console.log('esta aqui', registrosRecebidos[r].id, this.registro)
        this.alterarRegistro()
        this.getFuncionarios()
        this.getRegistros()
      } else if (registrosRecebidos[r].dia === this.dataAtual && // 1 OCUPADO
        registrosRecebidos[r].funcionario === this.funcionarioSelected.id &&
        registrosRecebidos[r].primeiro_registro != '00:00:00' &&
        registrosRecebidos[r].segundo_registro === '00:00:00') {
        this.registro.primeiro_registro = registrosRecebidos[r].primeiro_registro
        this.registro.segundo_registro = this.horarioAtual
        this.registro.id = registrosRecebidos[r].id
        this.alterarRegistro()
        this.getFuncionarios()
        this.getRegistros()
      } else if (registrosRecebidos[r].dia === this.dataAtual && // DOIS OCUPADOS
        registrosRecebidos[r].funcionario === this.funcionarioSelected.id &&
        registrosRecebidos[r].primeiro_registro != '00:00:00' &&
        registrosRecebidos[r].segundo_registro != '00:00:00' &&
        registrosRecebidos[r].terceiro_registro === '00:00:00') {
        this.registro.primeiro_registro = registrosRecebidos[r].primeiro_registro
        this.registro.segundo_registro = registrosRecebidos[r].segundo_registro
        this.registro.terceiro_registro = this.horarioAtual
        this.registro.id = registrosRecebidos[r].id
        this.alterarRegistro()
        this.getFuncionarios()
        this.getRegistros()
      } else if (registrosRecebidos[r].dia === this.dataAtual && // TRêS OCUPADOS
        registrosRecebidos[r].funcionario === this.funcionarioSelected.id &&
        registrosRecebidos[r].primeiro_registro != '00:00:00' &&
        registrosRecebidos[r].segundo_registro != '00:00:00' &&
        registrosRecebidos[r].terceiro_registro != '00:00:00' &&
        registrosRecebidos[r].quarto_registro === '00:00:00') {
        this.registro.primeiro_registro = registrosRecebidos[r].primeiro_registro
        this.registro.segundo_registro = registrosRecebidos[r].segundo_registro
        this.registro.terceiro_registro = registrosRecebidos[r].terceiro_registro
        this.registro.quarto_registro = this.horarioAtual
        this.registro.id = registrosRecebidos[r].id
        this.alterarRegistro()
        this.getFuncionarios()
        this.getRegistros()
      } else if (registrosRecebidos[r].dia === this.dataAtual && //QUATRO OCUPADOS
        registrosRecebidos[r].funcionario === this.funcionarioSelected.id &&
        registrosRecebidos[r].primeiro_registro != '00:00:00' &&
        registrosRecebidos[r].segundo_registro != '00:00:00' &&
        registrosRecebidos[r].terceiro_registro != '00:00:00' &&
        registrosRecebidos[r].quarto_registro != '00:00:00') {
        this.mensagem1 = 'enviar'
      }
    }
  }

  alterarRegistro() {
    this.api.updateRegistros(this.registro).subscribe(
      data => {
        this.registros.push(data)
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
    this.mensagem2 = 'enviar'
  }

  efetivarRegistro() {
    this.api.saveNewRegistro(this.registro).subscribe(
      data => {
        this.registros.push(data)
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
    this.mensagem2 = 'enviar'
  }

  apresentaMensagem1() {
    if (this.mensagem1 == '')
      return 'esconderResultado'
    else
      return 'mostrarResultado'
  }

  apresentaMensagem2() {
    if (this.mensagem2 == '')
      return 'esconderResultado'
    else
      return 'mostrarResultado'
  }

  apresentaMensagem3() {
    if (this.mensagem3 == '')
      return 'esconderResultado'
    else
      return 'mostrarResultado'
  }

  resetar() {
    this.mensagem1 = ''
    this.mensagem2 = ''
    this.mensagem3 = ''
    this.funcionarioSelected = { id: 0, matricula: 0, nome: '' }
  }

}
