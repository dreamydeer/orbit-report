import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from "../satellite";

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  countOfSatellitesByType(typeToCheck: string) {
    return this.satellites.filter((satellite) => {
      return satellite.type.toLowerCase() === typeToCheck;
    }).length;
  }

}
