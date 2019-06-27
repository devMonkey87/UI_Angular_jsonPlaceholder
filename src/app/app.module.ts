import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';

import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';






@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    AppRoutingModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    BrowserModule,
    FileUploadModule,
    DropdownModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
