import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ComicComponent } from '../components/comic/comic.component';
import  { ViewChild, ElementRef } from '@angular/core'; 
import { comicModel } from 'src/models/comicModel';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html'
})
export class LibreriaComponent implements OnInit {
    public comicFavorito!: comicModel;
    public comics: Array<comicModel>;
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



  constructor() { 

    this.comics = [
        {
          titulo: "Spiderman",
          imagen:
            "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
          descripcion: "Hombre araña"
        },
        {
          titulo: "Wolverine",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
          descripcion: "Lobezno"
        },
        {
          titulo: "Guardianes de la Galaxia",
          imagen:
            "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
          descripcion: "Yo soy Groot"
        },
        {
          titulo: "Avengers",
          imagen:
            "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
          descripcion: "Los Vengadores"
        },
        {
          titulo: "Spawn",
          imagen:
            "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
          descripcion: "Al Simmons"
        },
        {
          titulo: "Batman",
          imagen:
            "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
          descripcion: "Murcielago"
        }

        

    ]

   
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
    
  }

  



}
