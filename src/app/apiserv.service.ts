import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservService {

  // myurl = 'http://localhost:3000/posts';
  javaapi = 'http://192.168.1.155:8089/login';
  myurl="http://192.168.1.48:8089/login";
 netApi = "http://192.168.2.235:8078/api/Authentiction";
    constructor(private h: HttpClient) {

    }

    // we can call it from multiple components
    getnetlist(){
      return this.h.get(this.netApi);
    }
    postnetlist(rcvProd){
      return this.h.post(this.netApi,rcvProd);
    }
    deletenetList(recvProdId){
      console.log(recvProdId);
      return this.h.delete(this.netApi);
    }

   getapi() {
    return this.h.get('https://jsonplaceholder.typicode.com/users');
  }
  getProdlist(){
    return this.h.get(this.myurl);
  }
  postProdlist(rcvProd){
    return this.h.post(this.myurl,rcvProd);
  }
  deleteProdList(recvProdId){
    console.log(recvProdId);
    return this.h.delete(this.myurl+'/'+recvProdId);
  }
postapi() {
  const obj = {albumId: 1,
  id: 101,
  title: 'asddffg',
  url: 'as.asd.asdsfdffht.sdf',
  thumbnailUrl: 'dfgfghgh'

  };

  return this.h.post('https://jsonplaceholder.typicode.com/users', obj);


}
putapi() {
  const obj = {albumId: 1,
  id: 101,
  title: 'shanti',
  url: 'as.asd.asdsfdffht.sdf',
  thumbnailUrl: 'dfgfghgh'

  };
  return this.h.post('https://jsonplaceholder.typicode.com/users/1', obj);


}
postApi() {
  const obj = {
    id: 2,
    title: 'myBook',
    author: 'Me'
  };
  return this.h.post(this.myurl, obj);

}

updateApi() {
  const idd = 2;
  const obj = {
    id: 2,
    title: 'Book',
    author: 'Yourds'
  };
  // return this.h.put('http://localhost:3000/posts/2',obj);
 // return this.h.put('http://localhost:3000/posts/'+idd,obj);
  return this.h.put(`${this.myurl}/${idd}`, obj);

}
getApi() {
  // var obj={
  //   "id":2,
  //   "title":"Book",
  //   "author":"You"
  // }
  return this.h.get(this.myurl);

}
deleteApi(): Observable<any> {
  return this.h.delete('http://localhost:3000/posts/2');
}
patchApi() {
  const idd = 2;
  return this.h.patch('http://localhost:3000/posts/' + idd, {title: 'sdf'});
}


getDynamic(id) {
  console.log(id);
  return this.h.get(`${this.myurl}/${id}`);
}
deleteDynamic(id) {
  console.log(id);
  return this.h.delete(`${this.myurl}/${id}`);
}

postDynamic(obj) {
  return this.h.post(this.myurl, obj);
}
// updateDynamic(i,obj){
//   return this.h.put(`${this.myurl}/${i}`,obj);
// }


javaPostApi(obj) {

 return  this.h.post(this.javaapi, obj);
}







}
