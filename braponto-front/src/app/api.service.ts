import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/'
  token = 'Token 9bfa4fd2f90ee43577ba469a9b92feece8ab5da2'
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token)

  constructor(private http: HttpClient) { }

  getAllFuncionarios() : Observable<any> {
    return this.http.get(this.baseUrl + 'funcionarios/',
    {headers: this.httpHeaders})
  }

  getFuncionario(id:any) : Observable<any> {
    return this.http.get(this.baseUrl + 'funcionarios/' + id + '/',
    {headers: this.httpHeaders})
  }

  saveNewFuncionario(funcionario:any) : Observable<any> {
    return this.http.post(this.baseUrl + 'funcionarios/', funcionario,
    {headers: this.httpHeaders})
  }

  updateFuncionario(funcionario:any) : Observable<any> {
    let body = { matricula: funcionario.matricula, nome: funcionario.nome }
    return this.http.put(this.baseUrl + 'funcionarios/' + funcionario.id + '/', body,
    {headers: this.httpHeaders})
  }

  deleteFuncionario(id:any) : Observable<any> {
    return this.http.delete(this.baseUrl + 'funcionarios/' + id + '/',
    {headers: this.httpHeaders})
  }

  //###################

  getAllRegistros() : Observable<any> {
    return this.http.get(this.baseUrl + 'registros/',
    {headers: this.httpHeaders})
  }

  getRegistros(id:any) : Observable<any> {
    return this.http.get(this.baseUrl + 'registros/' + id + '/',
    {headers: this.httpHeaders})
  }

  saveNewRegistro(registro:any) : Observable<any> {
    return this.http.post(this.baseUrl + 'registros/', registro,
    {headers: this.httpHeaders})
  }
  
  updateRegistros(registro:any) : Observable<any> {
    let body = { funcionario: registro.funcionario, primeiro_registro: registro.primeiro_registro, segundo_registro: registro.segundo_registro, terceiro_registro: registro.terceiro_registro, quarto_registro: registro.quarto_registro }
    return this.http.put(this.baseUrl + 'registros/' + registro.id + '/', body,
    {headers: this.httpHeaders})
  }

}
