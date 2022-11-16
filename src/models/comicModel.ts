export class comicModel {
    public titulo: string;
    public imagen: string;
    public descripcion: string;


    constructor (titulo: string, imagen: string, descripcion: string) {
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.titulo = titulo;

    }
}