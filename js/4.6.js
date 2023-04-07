let a = prompt("Insérez un chiffre pour en trouver son facteur");

function factorial(number) {
  if (number < 0) {
    return -1;
  } else if (number == 0) {
    return 1;
  } else {
    return (number * factorial(number - 1));
  }
}


alert(factorial(a));


