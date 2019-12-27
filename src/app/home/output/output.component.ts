import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  principle;
  rate;
  terms;

myname:string="i am vinay";
  products = [
    {
      name: "chair",
      inventory: 5,
      unit_price: 45.99
    },
    {
      name: "table",
      inventory: 10,
      unit_price: 123.75
    },
    {
      name: "sofa",
      inventory: 2,
      unit_price: 399.50
    }
  ];
  // @Output() send_data = new EventEmitter;
  @Output() send_str= new EventEmitter();

  sendvalues(){
    this.send_str.emit(this.myname);
  }


  constructor() {
    // this.send_data.emit(this.products);
   this.sendvalues();
   }

  ngOnInit() {
    console.log(this.terms)
  }

}
