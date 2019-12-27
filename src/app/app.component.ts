import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngtest1';

 // tslint:disable-next-line: variable-name
 student_data: object = [
    {name: 'Vinay', dept: 'Devep', design: 'trainee', salary: 10000, city: 'warangal'  },
    {name: 'Roja', dept: 'Devep', design: 'Developer', salary: 9000, city: 'Medak'  },
    {name: 'Sravani', dept: 'HR', design: 'HR', salary: 15000, city: 'Vizag'  },
    {name: 'Prashanth', dept: 'Managment', design: 'Ops-Manager', salary: 50000, city: 'Karimnagagr'  }

];
recdparent = 'adkfjsa';
mname: Array<string> = ['vinay','prerana','kumar','divya','mahima'];

// recd(rd:string){
//   this.recdparent=rd;
//   console.log(rd);
// }


constructor() {
  }
}




