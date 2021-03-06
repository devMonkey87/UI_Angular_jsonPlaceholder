import { RouterModule } from '@angular/router';
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
import { ProductDetailsComponent } from './product-details/product-details.component';









@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TablesDataComponent,
    PageNotFoundComponent,
    ProductDetailsComponent
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
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductDetailsComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  providers: [
    HttpErrorHandler,
    MessageService,

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
