let n = prompt("Enter a Number");
let sum = 0;

if (n == 0) {
  alert("Pas de zéro ici !");
} else {
  for (i = 0; i < n; i++) {
    o = Number(prompt("Enter an other number"));
    sum += o;
  }
}

console.log(sum);
