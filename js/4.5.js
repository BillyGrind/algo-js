let xA = prompt("Coordonnée x de A");
let yA = prompt("Coordonnée y de A");
let xB = prompt("Coordonnée x de B");
let yB = prompt("Coordonnée y de B");

function calcDistance(x1, y1, x2, y2) {
  y = x2 - x1;
  x = y2 - y1;
  return resultat = Math.sqrt(x * x + y * y);
}


calcDistance(xA,yA,xB,yB);

alert(resultat);

/**
 * Calculer la distance entre des coordonnées de deux points
 * @param  {x1} xA Paramètre x de A
 * @param  {y1} xB Paramètre x de B
 * @param  {x2} yA Paramètre y de A
 * @param  {y2} yB Paramètre y de B
 * @return {resultat} Résultat de la distance
 */