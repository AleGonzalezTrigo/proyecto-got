import { Guerrero } from "./personajesEspeciales/guerrero.js";

export class Batalla {
  #muertos;

  constructor() {
    this.#muertos = [];
  }

  iniciarBatalla(casaA, casaB) {
    console.log(`\n🏰 ¡Comienza la batalla entre la Casa ${casaA.nombre} y la Casa ${casaB.nombre}!`);

    // Filtrar solo guerreros vivos de cada casa
    const ejercitoA = casaA.miembros.filter(m => m instanceof Guerrero && m.vivo);
    const ejercitoB = casaB.miembros.filter(m => m instanceof Guerrero && m.vivo);

    // Simular combate simple
    while (ejercitoA.length > 0 && ejercitoB.length > 0) {
      const atacanteA = ejercitoA[Math.floor(Math.random() * ejercitoA.length)];
      const atacanteB = ejercitoB[Math.floor(Math.random() * ejercitoB.length)];

      console.log(atacanteA.atacar(atacanteB));
      if (!atacanteB.vivo) {
        console.log(`${atacanteB.nombre} ha caído en batalla.`);
        this.#muertos.push(atacanteB);
        ejercitoB.splice(ejercitoB.indexOf(atacanteB), 1);
      }

      if (ejercitoB.length === 0) break;

      console.log(atacanteB.atacar(atacanteA));
      if (!atacanteA.vivo) {
        console.log(`${atacanteA.nombre} ha caído en batalla.`);
        this.#muertos.push(atacanteA);
        ejercitoA.splice(ejercitoA.indexOf(atacanteA), 1);
      }
    }

    const ganador = ejercitoA.length > 0 ? casaA.nombre : casaB.nombre;
    console.log(`\n🏆 ¡La Casa ${ganador} ha ganado la batalla!`);
  }

  mostrarGuerrerosMuertosEnBatalla() {
    console.log(`\n☠️ Guerreros muertos en combate:`);
    if (this.#muertos.length === 0) {
      console.log("Ningún guerrero ha muerto en esta batalla.");
      return;
    }
    this.#muertos.forEach(m => console.log(`- ${m.nombre} de la Casa ${m.casa.nombre}`));
  }
}
