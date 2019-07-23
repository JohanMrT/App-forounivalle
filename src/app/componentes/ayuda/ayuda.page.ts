import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  irahome(){
    this.router.navigate(['/menu/main']);
  }


}
