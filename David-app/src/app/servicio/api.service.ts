import { Component } from '@angular/core';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class ApiServicioComponent {
  
  constructor(private httpClient: HttpClient){}
 
    getImagenes() {
        return this.httpClient.get("https://akabab.github.io/starwars-api/api/all.json");  
    }
}
