export class Apuesta {
    actor1: string;
    ganaActor1: string;
    actor2: string;
    ganaActor2: string;
    descripccion: string;
    fechaFin: Date;
    fin: boolean;
    ganadaPor: string;
    pagada: boolean;
    contraseña: string;
}

export class Persona{
    persona: String;
    descripcion: String;
    constructor(persona: string, descripcion: string) {
        this.persona = persona;
        this.descripcion=descripcion;
    }
}


export class ApuestaPP{
    _id: String;
    apuestas: [Persona];
    descripcion: String;
    FechaFin: String;
    fin: boolean;
}
