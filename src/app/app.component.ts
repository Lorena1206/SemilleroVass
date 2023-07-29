import { Component } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-vass';


  ngOnInit() {
    AOS.init()
    window.addEventListener('load',AOS.refresh)
  }

}
