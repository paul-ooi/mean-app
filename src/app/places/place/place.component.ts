import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() place: Place[];

  constructor() {
  }

  ngOnInit() {
  }
}
