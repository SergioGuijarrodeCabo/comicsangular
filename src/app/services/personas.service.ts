import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable()
export class PersonasService{
  

    constructor (private _http: HttpClient){}

    getPersonas(): Observable<any> {
       var request= "/api/personas";
        //var url = "https://servicioapipersonasmvcpgs.azurewebsites.net";
        var urlPersonas = environment.urlApiPersonas + request;
        //TENEMOS DOS FORMAS  DE TRABAJAR CON LOS SERVICIOS (promesas)
        //1) COMO EN VUE: CREAR UNA PROMESA AQUÍ Y CAPTURARLA DENTRO
        //DE LA PETICIÓN
    /* 
        return new Promise(function(resolve){
            this.http.get(url).subscribe(response => {
                resolve(response);
            });
        }); */
        //2)DEVOLVER DIRECTAMENTE LA PROMESA DE LA PETICIÓN PARA QUE LA RESUELVA EL COMPONENT
        return this._http.get(urlPersonas);

    }


}