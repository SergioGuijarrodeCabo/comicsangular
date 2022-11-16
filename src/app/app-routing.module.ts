import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ModuleWithProviders } from '@angular/core';
import { ComicsInyeccion } from './components/comicsinyeccion/comicsinyeccion.component';
import { PersonasApi } from './components/personasapi/personasapi.component';
const routes: Routes = [
{
  path: "", component: HomeComponent
},
{
  path: "comics", component: LibreriaComponent
},

{
  path: "comicsinyeccion", component: ComicsInyeccion
},

{
  path: "personasapi", component: PersonasApi
}


];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(routes);


