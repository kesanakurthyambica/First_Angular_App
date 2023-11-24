import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector : '.app-home',
    templateUrl : './main.component.html',
    styleUrls : ['./main.component.css']
})

export class HomeComponent 
{
    constructor(private router : Router){

    }
    onClick():void{
         this.router.navigate(['/profile']);
    }
}