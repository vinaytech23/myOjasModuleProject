import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  child_data:object=[
    {name:"Vinay", dept:'Devep', design:'trainee', salary:10000, city: 'warangal'  },
    {name:"Roja", dept:'Devep', design:'Developer', salary:9000, city: 'Medak'  },
    {name:"Sravani", dept:'HR', design:'HR', salary:15000, city: 'Vizag'  },
    {name:"Prashanth", dept:'Managment', design:'Ops-Manager', salary:50000, city: 'Karimnagagr'  }

];
  @Input()  passing_data:object;

  constructor() { }

  ngOnInit() {
    console.log(this.passing_data);

  }

}
