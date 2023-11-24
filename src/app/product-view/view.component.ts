import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector : '.app-product-view',
    templateUrl : './view.component.html',
    styleUrls : ['./view.component.css']

})

export class ProductView 
{
    constructor(private router : Router){
    }
    onBack():void{
        this.router.navigate(['/home']);
      }
}