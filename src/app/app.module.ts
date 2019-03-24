import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import {MatFormFieldModule,MatInputModule, MatCardModule, MatButtonModule} from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroService } from './services/registro.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule
    
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
