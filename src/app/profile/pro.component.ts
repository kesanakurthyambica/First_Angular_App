import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector : '.app-profile',
    templateUrl : './pro.component.html',
    styleUrls : ['./pro.component.css']
})

export class ProfileComponent 
{
    constructor(private router : Router){

    }
    onClick():void{
         this.router.navigate(['/home']);
    }
}