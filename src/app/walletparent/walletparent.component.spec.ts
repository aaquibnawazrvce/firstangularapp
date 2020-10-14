import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletparentComponent } from './walletparent.component';

describe('WalletparentComponent', () => {
  let component: WalletparentComponent;
  let fixture: ComponentFixture<WalletparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
