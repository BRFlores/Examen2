import { Component, OnInit } from '@angular/core';
import {NavesClass} from "../../Clase/NavesClass";
import {Http} from "@angular/http";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 naves: NavesClass[]=[];
 clasenew: NavesClass= new NavesClass("");
  constructor(private _http:Http) { }

  ngOnInit() {
    this._http.get("http://swapi.co/api/starships/")
      .subscribe(
        //funciones anonimas http://swapi.co/api/people/?page=2
        (response)=>{
          console.log("Response: ",response);
          console.log(response.json());
          let respuesta=response.json();
          //console.log("Holaa",respuesta.next);
          this.naves=respuesta.results;
        },
        (error)=>{
          console.log("Error: ",error);
        },
        ()=>{
          console.log("Finally");
        }
      )
  }

}
