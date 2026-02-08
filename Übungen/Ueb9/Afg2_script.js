let daten = [
  { lang: "Python", rating: 9.704 },
  { lang: "JavaScript", rating: 2.451 },
  { lang: "C", rating: 15.773 },
  { lang: "Java", rating: 16.896 },
  { lang: "Visual Basic .NET", 
    rating: 5.287 },
  { lang: "C++", rating: 5.574 },
];

// Erstellt ein td-Element mit dem gegebenen Textinhalt
let createTd = function(content) {
  let td = document.createElement("td");
  td.textContent = content;
  return td;
};

//Ist ne Klausuraufgabe
daten.sort((a, b) => b.rating - a.rating);
let i = 1;
daten.forEach(function(item) {
  let tr = document.createElement("tr");
  tr.append(createTd(i), createTd(item.lang), createTd(item.rating));
  document.querySelector("tbody").append(tr);
  i++;
});
//Man könnte query Selector auslagern in Variable, also wenn man auf Laufzeit geht
//Aber juckt

//Afg 3: Bei Button 1
//true heißt, wir machen das in der Captur Phase
//Button 1: section geklickt (capture Phase), button1 geklickt (target Phase)
//Button 2: section geklickt (capture Phase), button2 geklickt (target Phase), p geklickt (bubble Phase)