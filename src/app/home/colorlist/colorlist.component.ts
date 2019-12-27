import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorlist',
  templateUrl: './colorlist.component.html',
  styleUrls: ['./colorlist.component.css']
})
export class ColorlistComponent implements OnInit {

  public color_list:string[]=["#CEEC97","#F4B393","#449DD1","#0E0E52","#FF8300","#FF8300","#FAFF81","#B26700","#161032","#FAFF81"];

  constructor() { }

  ngOnInit() {
  }

}
