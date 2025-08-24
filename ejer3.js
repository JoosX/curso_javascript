/*
Suma condicional de multiplos : Pide  un numero N y suma  solo los multiplos  de 3 a 5  hasta N. Muestra la suma y los nultiplos
*/
let N = 20
let suma = 0   //para que de la suma total de los valores que si cumplen con la condicion 
let multiplos = []

for(let i=1; i<N; i++){
    if(i%3==0 || i%5==0){
        suma+=i;
        multiplos.push(i);

    }
}   
console.log("Múltiplos encontrados= ", multiplos)
console.log("Suma total:", suma);

