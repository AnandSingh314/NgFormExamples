import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './components/name/name.component';
import { AddressComponent } from './components/address/address.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    AddressComponent,
    SkillSetComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
