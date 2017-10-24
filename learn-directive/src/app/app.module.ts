import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MyHighLightDirective } from './directives/my-high-light.directive';
import { WarningTextDirective } from './directives/warning-text.directive';
import { DelayDirective } from './directives/delay.directive';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHighLightDirective,
    WarningTextDirective,
    DelayDirective,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
