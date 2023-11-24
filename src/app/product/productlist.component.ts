import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: '.app-product',
  templateUrl : './productlist.component.html',  
  styleUrls : ['./productlist.component.css']
})


export class FirstcompComponent {

  constructor(private router : Router){
    
  }
  onBack():void{
    this.router.navigate(['/home']);
  }
  onNext():void{
    this.router.navigate(['profile']);
  }
}

