import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemointerpolationComponent } from './demointerpolation.component';

describe('DemointerpolationComponent', () => {
  let component: DemointerpolationComponent;
  let fixture: ComponentFixture<DemointerpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemointerpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemointerpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
