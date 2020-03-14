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
import { TablesDataComponent } from './components/tables-data/tables-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { ColorCreatorComponent } from './color-creator/color-creator.component';









@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TablesDataComponent,
    PageNotFoundComponent,
    ColorCreatorComponent
  ],
  imports: [
    AppRoutingModule,
    MegaMenuModule,
    BrowserAnimationsModule,
    BrowserModule,
    FileUploadModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    HttpClientModule

  ],
  providers: [
    HttpErrorHandler,
    MessageService,

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
