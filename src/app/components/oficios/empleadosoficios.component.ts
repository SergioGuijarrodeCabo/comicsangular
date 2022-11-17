import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleado } from 'src/models/empleado';


@Component({
  selector: 'app-empleadosoficios',
  templateUrl: './empleadosoficios.component.html',
  providers: [EmpleadosService]

})

export class EmpleadosOficios implements OnInit {

  public oficios !: Array<string>;
  // public oficios !: string[];
  @ViewChild('selectOficio') selectOficio !: ElementRef;
  public empleados!: Array<Empleado>;


  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe(response => {
      this.oficios = response;

    });
  }



  buscarEmpleados(){
    var oficio = this.selectOficio.nativeElement.value;
    
    this._service.getEmpleadosOficio(oficio).subscribe(response => {
      this.empleados = response;
      console.log(this.empleados);
    });
  }




}