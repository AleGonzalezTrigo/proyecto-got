export class Arma {
  #nombre;
  #daño;
  #tipo;

  constructor(nombre, daño, tipo = "") {
    this.#nombre = nombre;
    this.#daño = daño;
    this.#tipo = tipo;
  }

  get nombre() {
    return this.#nombre;
  }

  get daño() {
    return this.#daño;
  }

  get tipo() {
    return this.#tipo;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  set daño(nuevoDaño) {
    this.#daño = nuevoDaño;
  }

  set tipo(nuevoTipo) {
    this.#tipo = nuevoTipo;
  }

  descripcion() {
    return `${this.#nombre}${this.#tipo ? ` (${this.#tipo})` : ""} - daño: ${this.#daño}`;
  }
}
