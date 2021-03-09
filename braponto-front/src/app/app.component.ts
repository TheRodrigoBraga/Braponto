import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'braponto-front';

  constructor(private api:ApiService, private router: Router,  private route: ActivatedRoute,){
    
  }

  
}
  /*
  RegistrosSelect = (registro:any) => {
    this.router.navigate(['registro', registro.id])
  }
  
}

this.api.getAllFuncionarios().subscribe(
            data => {
              this.funcionarios = data
            },
            error => {
              console.log('Aconteceu um erro.', error.message)
            }
          )
          for (const d in data) {
            for (const f in this.funcionarios) {
              if(data[d].funcionario == this.funcionarios[f].id)
              data[d].funcionario = this.funcionarios[f].nome
              this.registros = data
            }       
          }
        */
