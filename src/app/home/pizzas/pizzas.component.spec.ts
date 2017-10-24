import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzasComponent } from './pizzas.component';

describe('PizzaComponent', () => {
  let component: PizzasComponent;
  let fixture: ComponentFixture<PizzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});