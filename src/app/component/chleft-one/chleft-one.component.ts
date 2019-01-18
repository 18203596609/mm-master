import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chleft-one',
  templateUrl: './chleft-one.component.html',
  styleUrls: ['./chleft-one.component.scss']
})
export class ChleftOneComponent implements OnInit {
  @Input() meauValue;

  constructor() { }

  ngOnInit() {
  }

}
