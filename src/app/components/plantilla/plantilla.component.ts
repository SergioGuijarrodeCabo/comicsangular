import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { PlantillaService } from '../../services/plantillas.service';
import { Plantilla } from 'src/models/plantilla';
@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  providers: [PlantillaService]

})

export class PlantillaComponent implements OnInit {
  //@ViewChild('selectFuncion') selectFuncion !: ElementRef;




    public plantillas!: Array<Plantilla>;
    public funciones!: Array<string>;
    public funcionesSelect!: Array<string>;


  constructor(private _service: PlantillaService) { }

  ngOnInit(): void {
    this._service.getFunciones().subscribe(data => {
      this.funciones = data;
    });
  
  }

  mostrarEmpleadosFunciones(){
    //this.funciones = this.funcionesSelect;
    //this.funcionesSelect = this.funciones;
    
    this._service.getPlantillaFunciones(this.funcionesSelect).subscribe(data => {
      this.plantillas = data;
    });
  
  
  }








}