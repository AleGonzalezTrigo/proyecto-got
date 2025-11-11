export class Reino {
  #nombre;
  #rey;
  #casas;

  constructor(nombre) {
    this.#nombre = nombre;
    this.#rey = null;
    this.#casas = [];
  }

  get nombre() {
    return this.#nombre;
  }

  get rey() {
    return this.#rey;
  }

  agregarCasa(casa) {
    this.#casas.push(casa);
    return `La Casa ${casa.nombre} ha sido añadida al Reino de ${this.#nombre}.`;
  }

  proclamarRey(rey) {
    this.#rey = rey;
    return `${rey.nombre} ha sido proclamado rey del Reino de ${this.#nombre}.`;
  }
}
