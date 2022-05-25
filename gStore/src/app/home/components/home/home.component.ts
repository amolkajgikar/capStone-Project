import { GoodModel } from './../../../good/models/good.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  goods: GoodModel[];

  ngOnInit(): void {
    let good = new GoodModel();
    good.id=1;
    good.name="OASSIS";
    good.title="Bottled Drinking Water 500ml Pack of 24";
    good.price= 10;
    good.imgSrc="https://z.nooncdn.com/tr:n-t_800/v1628162055/N39158510A_1.jpg";
    this.goods.push(good);



  }

}
