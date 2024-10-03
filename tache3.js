// Déclarer trois variables a, b et c.
let a = 10;
let b = 15;
let c = 25;

// a) Calculer la somme de a et b  
let somme = a + b + c;  
console.log("La somme de " + 'a,' + " " + 'b' +" et " + 'c' + " est égale à : " + somme);
    
// b) Faire le produit de a et b
let produit = a * b * c;
alert("Le produit de " + 'a,' +  " "+ 'b' +" et " + 'c' + " est égal à : " + produit);

// c) Multiplier les nombres de 1 à 9
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
      let resultat = i * j;  
      console.log(i + " x " + j + " = " + resultat);  
  }
  console.log("---------------------");  
}

// d) Diviser la somme par c
 let resultat = (a + b) / c;
 console.log("La division de la somme par " + c + " est égale à : " + resultat);
