import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tamplate-driven',
  templateUrl: './tamplate-driven.component.html',
  styleUrls: ['./tamplate-driven.component.css']
})
export class TamplateDrivenComponent implements OnInit {

  _firstName;
  _lastName;
  _emailid;
  _password;
  _confirm_password;
  _mobileNumber;

  onSubmit(register: NgForm) {
    // if (register.valid===true) {
    //   console.log('form submitted');
    // } else {
    //   alert("enter all details");
    //  }

    console.log(register.value);  // { first: '', last: '' }
    console.log(register.valid);  // false

  }

  constructor() { }

  ngOnInit() {

  }

}
