function listas(){
    const lista1= [1, 1, 3]
    const lista2= [4, 8, 6]
    const listas= [lista1, lista2]
    listas[1][1]= 10

    console.log(listas)
}

listas()
