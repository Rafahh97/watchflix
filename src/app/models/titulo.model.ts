export class Titulos {
    public id: number;
    public title: string;
    public capa: string;
    public alt: string;
    public genero: string;
    public tipo: string;
    public sinopse: string;

    constructor()
    constructor(id?: number, 
               title?: string, 
                capa?: string,
                alt?: string) {

        this.id = id? id : 0;
        this.title = title? title : '';
        this.capa = capa? capa: '';
        this.alt = alt? alt:''
    }
}