import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ModuleWithProviders } from '@angular/core';
import { ComicsInyeccion } from './components/comicsinyeccion/comicsinyeccion.component';
import { PersonasApi } from './components/personasapi/personasapi.component';
import { EmpleadosSalario } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosOficios } from './components/oficios/empleadosoficios.component'
import { PlantillaComponent } from './components/plantilla/plantilla.component';

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
},
{
  path: "empleadossalario", component: EmpleadosSalario
},

 {
  path: "empleadosoficios", component: EmpleadosOficios
 },

 {
  path: "plantilla", component: PlantillaComponent
 }


];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(routes);


