import { Component, OnInit} from '@angular/core';
import { Persona } from 'src/models/persona';
import { PersonasService } from 'src/app/services/personas.service';
@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',

})

export class PersonasApi implements OnInit {
  public personas!: Array<Persona>;


  constructor(private _service: PersonasService) { 
  }
    
  

  ngOnInit(): void {
      this._service.getPersonas().subscribe(response =>{
        this.personas = response;
        console.log(response);
      });
      console.log(this.personas);
  }

}