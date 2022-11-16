import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { comicModel } from 'src/models/comicModel';


@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html'
})
export class ComicComponent implements OnInit {

  @Input() comic!: comicModel;
   

  //VAMOS A RECIBIR UN MÉTODO DEL PADRE MEDIANTE props

  //@Output() seleccionarDeportePadre: EventEmitter<any> = new EventEmitter;

  constructor() { 


  }

  ngOnInit(): void {
  }



}
