import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodCartComponent } from './good-cart.component';

describe('GoodCartComponent', () => {
  let component: GoodCartComponent;
  let fixture: ComponentFixture<GoodCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
