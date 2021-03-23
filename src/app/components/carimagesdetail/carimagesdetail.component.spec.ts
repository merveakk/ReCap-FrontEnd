import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarimagesdetailComponent } from './carimagesdetail.component';

describe('CarimagesdetailComponent', () => {
  let component: CarimagesdetailComponent;
  let fixture: ComponentFixture<CarimagesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarimagesdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarimagesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
