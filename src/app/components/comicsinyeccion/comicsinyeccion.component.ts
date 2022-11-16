import { Component, OnInit} from '@angular/core';
import { comicModel } from 'src/models/comicModel';
import { ComicsService } from 'src/app/services/service.comics';



@Component({
  selector: 'app-comicsinyeccion',
  templateUrl: './comicsinyeccion.component.html',


  providers: [ComicsService]

})

export class ComicsInyeccion implements OnInit {

  public comics!: Array<comicModel>;


  constructor(private _service: ComicsService) { }

  ngOnInit(): void {
    this.comics = this._service.getComic();   
    console.log(this.comics);
  }



}