import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NasaService  } from './services/nasa.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    HttpClientModule
  ],
  exports:[
    HeaderComponent
  ],
  providers: [
    NasaService,
  ]
})

export class SharedModule { }
