import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Counter} from './Counter'
import { COUNTERS } from './mock-counters'

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {
  counters:Counter[] = COUNTERS;
  activeCounter:Counter;
  plotId: Number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.counters.length != 0)
      this.activeCounter = this.counters[0];
    this.route.params.subscribe(params => {
      this.plotId = +params['plotId']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }
  public activate(event: any, item: Counter) {
    this.activeCounter = item;
  }

}
