import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { comicModel } from 'src/models/comicModel';
import { ComicsService } from 'src/app/services/service.comics';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from 'src/models/empleado';


@Component({
  selector: 'app-empleadossalario',
  templateUrl: './empleadossalario.component.html',
  providers: [EmpleadosService]

})

export class EmpleadosSalario implements OnInit {
    public empleados!: Array<Empleado>;

 @ViewChild ('cajasalario') cajaSalario!: ElementRef;


  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {

    this._service.getEmpleados().subscribe(response => {
        this.empleados = response;
    });
  }


  mostrarEmpleadosSalario() {
    var salario = this.cajaSalario.nativeElement.value;
    
    this._service.getEmpleadosSalario(salario).subscribe(response => {
        this.empleados = response;
    });


  }



}