const G1 = 1500
const G2 = 2500
let age = 11
// Question1
do{
    if( age < 16)
    console.log(`le prix pour la personne agée de ${age} est ${G1}`)
    else{ 
    console.log(`le prix pour la personne agée de ${age} est ${G2}`)
    }
    age = age + 1;
}
while(age <= 20 )
// Question2
let Rec = 0
age = 11
do{
    if( age < 16){
         Rec += G1;
    }
    else{
        Rec += G2;
    }
    age = age + 1;
}
while(age <= 20)
console.log(`la recette totale est : ${Rec} FCFA`)
// Question3
let nombreTkG1 = 0;
let nombreTkG2 = 0;
age = 11;
do{
    if( age < 16)
        nombreTkG1 = nombreTkG1 + 1
    else{
        nombreTkG2++
    }
    age++;
}
while(age <= 20)
console.log(`le nombre de ticket pour mineur est ${nombreTkG1}`)
console.log(`le nombre de ticket pour majeur est ${nombreTkG2}`)