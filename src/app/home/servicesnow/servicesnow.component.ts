import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiservService } from 'src/app/apiserv.service';

@Component({
  selector: 'app-servicesnow',
  templateUrl: './servicesnow.component.html',
  styleUrls: ['./servicesnow.component.css']
})
export class ServicesnowComponent implements OnInit {

  constructor(private fb: FormBuilder, private ht: HttpClient, private api: ApiservService) { }

  jwt: any;

  loginform = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]

  });
  ngOnInit() {
  }


loginMethod() {
  console.log(this.loginform.value);

  this.api.postProdlist(this.loginform.value).subscribe(
    res =>{ console.log(res);
  // localStorage.setItem("tkn",res.authorization);
  localStorage.setItem('name', 'asdsf');
    })


}
removeToken() {
  console.log('inside removeToken method');
 // localStorage.removeItem("tkn");
  localStorage.removeItem('name');

}
}
