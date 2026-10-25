//Unos podataka

let ime = prompt("Unesi svoje ime:");
let cijenaUlaznice = Number(prompt("Unesi cijenu jedne ulaznice u eurima:"));
let brojUlaznica = Number(prompt("Unesi broj ulaznica:"));
let budzet = Number(prompt("Unesi raspoloživi budžet u eurima:"));
let nastavakPlaniranja = confirm("Želiš li nastaviti s planiranjem izleta?");

//Izračun i usporedbe

let ukupniTrosak = cijenaUlaznice * brojUlaznica;
let preostaliIznos = budzet - ukupniTrosak;
let dovoljnoNovca = budzet >= ukupniTrosak;
let tocanIznos = budzet === ukupniTrosak;