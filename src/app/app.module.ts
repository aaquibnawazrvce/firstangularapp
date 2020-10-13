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

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DemointerpolationComponent,
    PropertybindingdemoComponent,
    StylebindingdemoComponent,
    EventbindingdemoComponent,
    TemplatereferencedemoComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
