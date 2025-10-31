class Casa{
    #nombre;
    #lema;
    #miembros;

    constructor(nombre, lema, miembros){
        this.#nombre=nombre;
        this.#lema=lema;
        this.#miembros=miembros;
    }

    //Getters
    get nombre(){
        return this.#nombre;
    }
    get lema(){
        return this.#lema;
    }
    get miembros(){
        retunr this.#miembros;
    }


}