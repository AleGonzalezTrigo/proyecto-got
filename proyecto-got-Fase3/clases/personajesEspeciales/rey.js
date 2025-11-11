import { Personaje } from "../Personaje.js";

export class Rey extends Personaje {
  #añosReinado;

  constructor(nombre, edad, vivo, casa, añosReinado) {
    super(nombre, edad, vivo, casa);
    this.#añosReinado = añosReinado;
  }

  gobernar() {
    return `${this.nombre} gobierna con justicia desde hace ${this.#añosReinado} años.`;
  }

  luchar() {
    return `${this.nombre} lidera a sus tropas en el campo de batalla.`;
  }
}
