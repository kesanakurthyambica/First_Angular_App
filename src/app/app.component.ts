import { Component } from '@angular/core'

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css']
})
export class AppComponent {
  title = 'ngapp2';
  event= {
    id : 1,  
    name : 'Student',
    date : '17/10/2023',
    time : '19:26 pm',
    price : 599.99

  }
}
