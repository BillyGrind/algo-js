//  Recuperation des données lenght et width de l'utilisateur
let lenght = Number(prompt("Lenght"));
let width = Number(prompt("Width"));

// Création d'une faction arrow pour calculer la surface

let calcSurface = (a, b) => {
  return a * b;
};

// Afficher une ptite phrase d'accroche avec le resultat de la surface

alert("La surface du rectangle est de : " + calcSurface(lenght, width));

/**
 * Multiplier deux nombres
 * @param  {lenght} first first number
 * @param  {width}  The second number
 * @return {a*b}     The multiplication of the two numbers
 */
