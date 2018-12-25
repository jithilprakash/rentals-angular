import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  welcomeMessage ='This is a welcome message from app component ts';

  clickhandler(){
    alert('clicked')
  }


}
