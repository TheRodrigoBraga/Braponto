import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosDetailComponent } from './funcionarios-detail.component';

describe('FuncionariosDetailComponent', () => {
  let component: FuncionariosDetailComponent;
  let fixture: ComponentFixture<FuncionariosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
