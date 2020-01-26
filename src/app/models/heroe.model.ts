//todo este modelo es necesario para crear el modelo para guardar los datos

export class HeroeModel{

    id: string;
    nombre:string;
    poder:string;
    vivo:boolean;

    constructor(){

        this.vivo=true;
    }
}