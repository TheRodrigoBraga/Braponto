import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/'
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllFuncionarios() : Observable<any> {
    return this.http.get(this.baseUrl + 'funcionarios/',
    {headers: this.httpHeaders})
  }

  getFuncionario(id:any) : Observable<any> {
    return this.http.get(this.baseUrl + 'funcionarios/' + id + '/',
    {headers: this.httpHeaders})
  }

}
