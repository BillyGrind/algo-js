function rand10(n) {
  return Math.floor(Math.random() * n);
}

//  alert(rand10(10));

let arr = [];
let n = Number(prompt("Insère un chiffre"));

function multiRand(a) {
  for (i = 0; i < a; i++) {
     arr.push(rand10(10));
  }
  return arr ;
}
multiRand(n);

alert(arr);
