import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingdemoComponent } from './twowaybindingdemo.component';

describe('TwowaybindingdemoComponent', () => {
  let component: TwowaybindingdemoComponent;
  let fixture: ComponentFixture<TwowaybindingdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaybindingdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybindingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
