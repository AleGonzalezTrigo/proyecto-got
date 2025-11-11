import { Personaje } from "../Personaje.js";

export class Guerrero extends Personaje {
  #arma;
  #vida;

  constructor(nombre, edad, vivo, casa, arma) {
    super(nombre, edad, vivo, casa);
    this.#arma = arma;
    this.#vida = 100;
  }

  get arma() {
    return this.#arma;
  }

  get vida() {
    return this.#vida;
  }

  set vida(nuevaVida) {
    this.#vida = nuevaVida;
  }

  atacar(objetivo) {
    if (!this.vivo) return `${this.nombre} no puede atacar, está muerto.`;

    const daño = this.#arma.daño;
    objetivo.recibirDaño(daño);
    return `${this.nombre} ataca a ${objetivo.nombre} con ${this.#arma.nombre}, causando ${daño} de daño.`;
  }

  recibirDaño(puntos) {
    this.#vida -= puntos;
    if (this.#vida <= 0) {
      this.#vida = 0;
      this.vivo = false;
      return `${this.nombre} ha muerto en combate.`;
    }
    return `${this.nombre} recibe ${puntos} puntos de daño. Vida restante: ${this.#vida}.`;
  }

  luchar() {
    return `${this.nombre} se lanza a la batalla con su ${this.#arma.nombre}.`;
  }

  presentarse() {
    return `Soy ${this.nombre} de la Casa ${this.casa.nombre}, listo para luchar.`;
  }
}
