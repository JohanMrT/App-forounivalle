import { Component, OnInit } from '@angular/core';
import { AuthService } from '/home/johan/Forounivalle/src/app/servicios/auth.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    /*{
      title: 'Main',
      url: '/menu/home',
      icon: 'home'
    },*/
    
        {
          title: 'Informacion Personal',
          url: '/menu/infopersonal',
          icon: 'person'
        },
        {
          title: 'Informacion',
          url: '/menu/informacion',
          icon: 'information-circle'
        },
        {
          title: 'Ayuda',
          url: '/menu/ayuda',
          icon: 'help-circle'
        }, 
  ];

  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }

  onlogout(){
    this.authservice.logout();
  }

}
