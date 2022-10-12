import { Component, OnInit, Input } from '@angular/core';
import { Luminaria } from '../models/luminaria.model';

@Component({
  selector: 'app-luminaries-charge',
  templateUrl: './luminaries-charge.component.html',
  styleUrls: ['./luminaries-charge.component.css']
})
export class LuminariesChargeComponent implements OnInit {

  luminaries: Luminaria[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
