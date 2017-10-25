import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompizzaComponent } from './custompizza.component';

describe('CustompizzaComponent', () => {
  let component: CustompizzaComponent;
  let fixture: ComponentFixture<CustompizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustompizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustompizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
