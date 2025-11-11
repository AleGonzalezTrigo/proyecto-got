export class Personaje {
  #nombre;
  #edad;
  #vivo;
  #casa;
  #arma;

  constructor(nombre, edad, vivo, casa) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#vivo = vivo;
    this.#casa = casa;
    this.#arma = null;
  }

  get nombre() {
    return this.#nombre;
  }

  get edad() {
    return this.#edad;
  }

  get vivo() {
    return this.#vivo;
  }

  get casa() {
    return this.#casa;
  }

  get arma() {
    return this.#arma;
  }

  set vivo(nuevoEstado) {
    this.#vivo = nuevoEstado;
  }

  set arma(nuevaArma) {
    this.#arma = nuevaArma;
  }

  presentarse() {
    return `Soy ${this.#nombre} de la Casa ${this.#casa.nombre}.`;
  }
}
