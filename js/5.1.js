function askTvSerie() {
  let object = {
    Acteurs: [],
  };
  let name = prompt("Nom de la série ?");
  let year = prompt("L'année de la Série ?");
  //Possibilité de mettre plusieurs acteurs
  while (true) {
    let cast = prompt("Distribution des acteurs ?");
    if (cast != "") {
      object.Acteurs.push(cast);
    } else {
      break;
    }
  }

  object.Name_Serie = name;
  object.Year_of_Production = year;
  console.log(object);
  serieTV = JSON.stringify(object);
  return serieTV;

}
askTvSerie();
alert(serieTV);

// randomizeCast(serieTv){

//     let cast={};
//     list.push(inputAr[Math.floor(Math.random() * inputAr.length)]);

// }

