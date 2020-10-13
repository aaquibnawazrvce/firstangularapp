import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingdemoComponent } from './eventbindingdemo.component';

describe('EventbindingdemoComponent', () => {
  let component: EventbindingdemoComponent;
  let fixture: ComponentFixture<EventbindingdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbindingdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbindingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
