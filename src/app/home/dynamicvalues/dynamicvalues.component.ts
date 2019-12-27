import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamicvalues',
  templateUrl: './dynamicvalues.component.html',
  styleUrls: ['./dynamicvalues.component.css']
})
export class DynamicvaluesComponent implements OnInit {

  countriesArray = [
    "United States",
    "Australia",
    "Canada",
    "Brazil",
    "England",
  ];
  coursesArray = [
    "United States",
    "Australia",
    "Canada",
    "Brazil",
    "England",
  ];
  status:boolean=false;
  selectedValueAA:any;

  countries = [
    {id: 1, name: "United States"},
    {id: 2, name: "Australia"},
    {id: 3, name: "Canada"},
    {id: 4, name: "Brazil"},
    {id: 5, name: "England"}
  ];
 selectedValue:any;
 selectedItem = null;

 ckeckvalues:string[];


 tags = [{
  name: 'Empathetic',
  checked: false
}, {
  name: 'Smart money',
  checked: false
}, {
  name: 'Minimal help after writing check',
  checked: false
}, {
  name: 'Easy term sheet',
  checked: false
}];

 changeCheckbox(tags, i) {
  if (tags) {
    this.tags[i].checked = !this.tags[i].checked;
  }
}
  constructor() { }

  ngOnInit() {
  }

}
