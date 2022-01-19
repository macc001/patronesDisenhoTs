import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FactoryMethodComponent } from './creation/factory-method/factory-method.component';
import { AbstractFactoryComponent } from './creation/abstract-factory/abstract-factory.component';


@NgModule({
  declarations: [
    AppComponent,
    FactoryMethodComponent,
    AbstractFactoryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
