import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Plantilla } from "src/models/plantilla";

@Injectable()
export class PlantillaService {

      constructor(private http: HttpClient) { }
    
      getPlantilla(): Observable<any> {
        var request= "api/plantilla/funciones";
        var url = environment.urlApiPlantilla + request;
        return this.http.get(url);
      }

      getFunciones(): Observable<any> {
        var request= "api/plantilla/funciones";
        var url = environment.urlApiPlantilla + request;
        return this.http.get(url);

      }

      getPlantillaFunciones(funcion: Array<string>): Observable<any> {
        var request= "api/plantilla/plantillafunciones?funcion=";

        for(var i=0; i<funcion.length; i++){
          request += funcion[i]+"&funcion=";
        }
        console.log(request);
        
        var url = environment.urlApiPlantilla + request;
        return this.http.get(url);
      }


    


}