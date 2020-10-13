import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatereferencedemoComponent } from './templatereferencedemo.component';

describe('TemplatereferencedemoComponent', () => {
  let component: TemplatereferencedemoComponent;
  let fixture: ComponentFixture<TemplatereferencedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatereferencedemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatereferencedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
