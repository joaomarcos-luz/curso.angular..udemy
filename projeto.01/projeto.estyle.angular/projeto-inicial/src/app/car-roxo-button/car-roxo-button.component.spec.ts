import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRoxoButtonComponent } from './car-roxo-button.component';

describe('CarRoxoButtonComponent', () => {
  let component: CarRoxoButtonComponent;
  let fixture: ComponentFixture<CarRoxoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarRoxoButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarRoxoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
