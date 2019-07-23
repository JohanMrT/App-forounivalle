import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  irahome(){
    this.router.navigate(['/menu/main']);
  }


}
