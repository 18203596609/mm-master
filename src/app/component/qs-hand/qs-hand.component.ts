import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qs-hand',
  templateUrl: './qs-hand.component.html',
  styleUrls: ['./qs-hand.component.scss']
})
export class QsHandComponent implements OnInit {
  @Input() value;

  constructor() { }

  ngOnInit() {
  }

}
