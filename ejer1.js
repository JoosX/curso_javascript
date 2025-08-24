let nota=prompt("Ingresa la nota:")
let asistencia= prompt("Ingresa la asistencia:")
if(nota>=11 && asistencia>=70){
    if(nota>=17 && asistencia===100){
        console.log("Aprobado con mencion honorifica")
    }else{console.log("Aprobado");}
} else {
    console.log("Desaprobado");
}   