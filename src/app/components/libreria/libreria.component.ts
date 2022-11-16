import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ComicComponent } from '../comic/comic.component';
import  { ViewChild, ElementRef } from '@angular/core'; 
import { comicModel } from 'src/models/comicModel';
import { ComicsService } from 'src/app/services/service.comics';
@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html'
})
export class LibreriaComponent implements OnInit {
    public comicFavorito!: comicModel;
    public comics!: Array<comicModel>;
    public comic: any;
    @ViewChild("cajatitulo") cajatitulo!: ElementRef; 
    @ViewChild("cajaimagen") cajaimagen!: ElementRef;
    @ViewChild("cajadescripcion") cajadescripcion!: ElementRef; 

    //AL MODIFICAR EN EL HIJO, RECIBIMOS EL INDEX A MODIFICAR

    modificarComic(i: number): void{

      this.cajatitulo.nativeElement.value = this.comics[i].titulo;
      this.cajaimagen.nativeElement.value = this.comics[i].imagen;
      this.cajadescripcion.nativeElement.value = this.comics[i].descripcion;

    
    }

    eliminarComic(i: number): void{
    this.comics.splice(i, 1);
    }



    constructor(private _service: ComicsService) { 
    }


    seleccionarFavorito(event: comicModel):void{
      this.comicFavorito = event;
    }


    addComic() {
      
      this.comic = {
        titulo: this.cajatitulo.nativeElement.value,
        imagen: this.cajatitulo.nativeElement.value,
        descripcion: this.cajatitulo.nativeElement.value};


      this.comics.push(this.comic);

    }
    ngOnInit(): void {
      this.comics = this._service.getComic();
    }

  



}
