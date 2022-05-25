import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodCartComponent } from './components/good-cart/good-cart.component';



@NgModule({
  declarations: [
    GoodCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[GoodCartComponent]
})
export class GoodModule { }
