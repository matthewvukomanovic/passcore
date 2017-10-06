import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { RecaptchaModule } from 'ng2-recaptcha';

import { MaterialModule } from './app.material-module';
import { ChangePasswordComponent } from './app.change-password';
import { FooterComponent } from './app.footer';
import { DialogOverview } from './app.dialog';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    FooterComponent,
    DialogOverview
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpModule,
    FlexLayoutModule,
    RecaptchaModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ChangePasswordComponent],
  entryComponents: [DialogOverview]
})
export class AppModule { }
