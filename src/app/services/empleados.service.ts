import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class EmpleadosService {

    constructor(private _http: HttpClient) { }


    getEmpleados(): Observable<any> {
        var request = "api/Empleados";
        var url = environment.urlApiEmpleado + request;
        return this._http.get(url);
    }


    getEmpleadosSalario(salario: string): Observable<any> {
        var request = "api/empleados/empleadossalario/";
        var url = environment.urlApiEmpleado + request;
        return this._http.get(url + salario);
    }
    

    getOficios(): Observable<any> {
        var request = "api/empleados/oficios";
        var url = environment.urlApiEmpleado + request;
        return this._http.get(url);

    }
    

    getEmpleadosOficio(oficio: string): Observable<any> {
        var request = "api/empleados/empleadosoficio/";
        var url = environment.urlApiEmpleado + request +oficio;
        return this._http.get(url);
    }

}