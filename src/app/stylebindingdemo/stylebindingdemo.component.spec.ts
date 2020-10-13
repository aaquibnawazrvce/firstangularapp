import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylebindingdemoComponent } from './stylebindingdemo.component';

describe('StylebindingdemoComponent', () => {
  let component: StylebindingdemoComponent;
  let fixture: ComponentFixture<StylebindingdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylebindingdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylebindingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
