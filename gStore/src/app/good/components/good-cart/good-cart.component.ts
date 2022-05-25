import { GoodModel } from './../../models/good.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-good-cart',
  templateUrl: './good-cart.component.html',
  styleUrls: ['./good-cart.component.css']
})
export class GoodCartComponent implements OnInit {
  @Input() good:GoodModel;

  constructor() { }

  ngOnInit(): void {
  }

}
