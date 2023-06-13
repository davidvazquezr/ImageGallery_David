import { NgModule ,Component, enableProdMode,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './components/image-gallery-component/image-gallery-component.component';
import { AddImageComponent } from './components/add-image/add-image.component';
import { ApiServicioComponent } from './servicio/api.service'
import { HttpClientModule } from '@angular/common/http';
import {
  DxDataGridModule,
  DxTemplateModule,
  DxListModule
} from "devextreme-angular";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
    AddImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxTemplateModule,
    DxListModule,
    ReactiveFormsModule
  ],
  providers: [ApiServicioComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
