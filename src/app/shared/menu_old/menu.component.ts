import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private menu: MenuController,
    private router: Router
    ) { }

  ngOnInit() {
    // this.openFirst();
  }

  abrirPaginas(){
    // alert(0)
    this.router.navigateByUrl("/paginas")
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
