import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  submitted: boolean;

  // forms properties defination

  stuForm = new FormGroup({

    name : new FormControl('', [Validators.required, Validators.minLength(5)]),
    age : new FormControl('', [Validators.required, Validators.min(18), Validators.max(35)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    address : new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      state: new FormControl('', [Validators.required, Validators.minLength(3)]),
      pincode: new FormControl('', [Validators.required, Validators.minLength(6)]),

    })
  });

  constructor() { }

  ngOnInit() {

    console.log(this.stuForm.invalid);
  }
  onSubmit(x: any){
this.submitted = true;
console.log(this.submitted);
console.log(x);

  }


}
