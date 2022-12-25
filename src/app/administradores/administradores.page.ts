import { HttpClient } from '@angular/common/http';
import { Administrador } from './../models/administrador';
import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../services/administradorService';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.page.html',
  styleUrls: ['./administradores.page.scss'],
})
export class AdministradoresPage implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.carregaAdministradores()
  }

  public administradores: Administrador[]

  async carregaAdministradores(){
    this.administradores = await new AdministradorService(this.http).todos();
  }

}
