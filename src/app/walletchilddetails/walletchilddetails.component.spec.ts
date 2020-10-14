import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletchilddetailsComponent } from './walletchilddetails.component';

describe('WalletchilddetailsComponent', () => {
  let component: WalletchilddetailsComponent;
  let fixture: ComponentFixture<WalletchilddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletchilddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletchilddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
