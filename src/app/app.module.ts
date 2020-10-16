import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DemointerpolationComponent } from './demointerpolation/demointerpolation.component';
import { PropertybindingdemoComponent } from './propertybindingdemo/propertybindingdemo.component';
import { StylebindingdemoComponent } from './stylebindingdemo/stylebindingdemo.component';
import { EventbindingdemoComponent } from './eventbindingdemo/eventbindingdemo.component';
import { TemplatereferencedemoComponent } from './templatereferencedemo/templatereferencedemo.component';
import { TwowaybindingdemoComponent } from './twowaybindingdemo/twowaybindingdemo.component';
import { NgifdemoComponent } from './ngifdemo/ngifdemo.component';
import { NgswitchdemoComponent } from './ngswitchdemo/ngswitchdemo.component';
import { NgfordemoComponent } from './ngfordemo/ngfordemo.component';
import { WalletparentComponent } from './walletparent/walletparent.component';
import { WalletchilddetailsComponent } from './walletchilddetails/walletchilddetails.component';
import { ParentdemoComponent } from './parentdemo/parentdemo.component';
import { ChilddemoComponent } from './childdemo/childdemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DemointerpolationComponent,
    PropertybindingdemoComponent,
    StylebindingdemoComponent,
    EventbindingdemoComponent,
    TemplatereferencedemoComponent,
    TwowaybindingdemoComponent,
    NgifdemoComponent,
    NgswitchdemoComponent,
    NgfordemoComponent,
    WalletparentComponent,
    WalletchilddetailsComponent,
    ParentdemoComponent,
    ChilddemoComponent,
    PipedemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
