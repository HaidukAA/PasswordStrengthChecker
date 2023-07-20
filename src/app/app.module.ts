import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ValidationBarComponent } from './validation-bar/validation-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent,
    CustomInputComponent,
    ValidationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
