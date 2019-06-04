import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-blue-circle',
  templateUrl: './blue-circle.component.html',
  styleUrls: ['./blue-circle.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BlueCircleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
