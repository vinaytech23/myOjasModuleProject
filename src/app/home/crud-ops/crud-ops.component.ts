import { Component, OnInit } from '@angular/core';
import { ApiservService } from 'src/app/apiserv.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud-ops',
  templateUrl: './crud-ops.component.html',
  styleUrls: ['./crud-ops.component.css']
})
export class CrudOpsComponent implements OnInit {
  recdData;

  productData= this.customForm.group({

    title:(''),
    author:('')
  });


  getProdData(){
    this.prodServ.getProdlist().subscribe(res=>{
      console.log(res);
      this.recdData=res;
    });
  }
  postProdData(productData){
    this.prodServ.postProdlist(this.productData.value).subscribe(res=>console.log(res));
  }
  deleteid(deletedItem){

    console.log(deletedItem);
    this.prodServ.deleteProdList(deletedItem).subscribe(res=>console.log(res));

  }
  constructor(private prodServ: ApiservService, private customForm: FormBuilder) { }
  ngOnInit() {
  }

}
