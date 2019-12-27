import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalc',
  templateUrl: './emicalc.component.html',
  styleUrls: ['./emicalc.component.css']
})
export class EmicalcComponent implements OnInit {

  principle:any=window.prompt("enter principle value");
  terms:any=window.prompt("enter months");
  rate:any=window.prompt("enter interest rate per annum");
  result_emi:number;
  _likes = prompt("enter likes");
  
  likesC(){
    var likes:number= Number(this._likes);
    if(likes>999){
      var likesCon= Math.round(likes/1000)+"k";
      return this._likes=likesCon;
    }
    else return this._likes;
  }
  
  constructor() { 
   
  
  }

  ngOnInit() {
    
    var p= Number(this.principle);
    var r = Number(this.rate)/12/100;
    var t = Number(this.terms)
    var result =  ((p*r*Math.pow((1+r),t))/(Math.pow((1+r),t)-1));
    console.log(result);
    this.result_emi=result; 
    
    
   

  }

}
