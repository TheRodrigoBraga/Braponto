import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'braponto-front';

  constructor(private api:ApiService, private router: Router,  private route: ActivatedRoute, private appRouting: AppRoutingModule){
    
  }

}