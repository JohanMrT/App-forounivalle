import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-infopersonal',
  templateUrl: './infopersonal.page.html',
  styleUrls: ['./infopersonal.page.scss'],
})
export class InfopersonalPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  irahome(){
    this.router.navigate(['/menu/main']);
  }

}
