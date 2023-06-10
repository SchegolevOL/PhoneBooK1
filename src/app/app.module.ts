import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneItemComponent } from './components/phone-item/phone-item.component';
import { PhoneBookComponent } from './components/phone-book/phone-book.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhoneItemComponent,
    PhoneBookComponent,
    PhoneFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
