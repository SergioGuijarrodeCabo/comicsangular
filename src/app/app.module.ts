import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingProviders, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ComicsInyeccion } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicsService } from './services/service.comics';
import { HttpClientModule } from '@angular/common/http';
import { PersonasApi } from './components/personasapi/personasapi.component';
import { PersonasService } from './services/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    MenuComponent,
    HomeComponent,
    ComicsInyeccion,  
    PersonasApi
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders, ComicsService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
