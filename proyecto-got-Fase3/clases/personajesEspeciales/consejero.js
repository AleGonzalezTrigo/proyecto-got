import { Personaje } from "../Personaje.js";

export class Consejero extends Personaje {
  #especialidad;

  constructor(nombre, edad, vivo, casa, especialidad) {
    super(nombre, edad, vivo, casa);
    this.#especialidad = especialidad;
  }

  aconsejar(rey) {
    return `${this.nombre} aconseja a ${rey.nombre} sobre ${this.#especialidad}.`;
  }

  luchar() {
    return `${this.nombre} no lucha con armas, sino con sabiduría.`;
  }
}
