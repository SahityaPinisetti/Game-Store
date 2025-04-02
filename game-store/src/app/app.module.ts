import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // ✅ Import AppComponent
import { NavbarComponent } from './navbar/navbar.component'; // ✅ Import NavbarComponent

@NgModule({
  imports: [
    BrowserModule,
    AppComponent, // ✅ Import standalone component
    NavbarComponent // ✅ Import standalone component (if applicable)
  ],
  providers: [],
})
export class AppModule { }
