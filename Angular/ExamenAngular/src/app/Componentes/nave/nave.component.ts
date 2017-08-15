import {Component, Input, OnInit} from '@angular/core';
import {NavesClass} from "../../Clase/NavesClass";

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {
  @Input() naveDatos:NavesClass;
  constructor() { }

  ngOnInit() {
  }

}
