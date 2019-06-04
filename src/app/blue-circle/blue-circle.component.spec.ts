import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueCircleComponent } from './blue-circle.component';

describe('BlueCircleComponent', () => {
  let component: BlueCircleComponent;
  let fixture: ComponentFixture<BlueCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
