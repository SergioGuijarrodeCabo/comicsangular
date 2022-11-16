import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { comicModel } from 'src/models/comicModel';


@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic!: comicModel;
  @Input() index!: number;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter;
  @Output() modificarComic: EventEmitter<any> = new EventEmitter;
  @Output() eliminarComic: EventEmitter<any> = new EventEmitter;

  marcarFavorito(){
    this.seleccionarFavorito.emit(this.comic);
  }

  updateComic(): void{
    this.modificarComic.emit(this.index);
  }

  deleteComic(): void{
    this.eliminarComic.emit(this.index);
  }

  //VAMOS A RECIBIR UN MÉTODO DEL PADRE MEDIANTE props

  //@Output() seleccionarDeportePadre: EventEmitter<any> = new EventEmitter;

  constructor() { 


  }

  ngOnInit(): void {
  }



}
