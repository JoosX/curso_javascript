class Persona{
    constructor(nombre, edad, estatura){
        this.nombre= nombre;
        this.edad= edad;
    }
    mostrarPersona(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} y tengo ${this.estatura}`
    }
}

const persona1= new Persona("ana", 28)


class Trabajador extends Persona{
    constructor(nombre, edad, cargo){
        super(nombre, edad);
        this.cargo  = cargo;
    }
    mostrarTrabajador(){
        return`Hola soy ${this.nombre} y tengo ${this.edad} y soy ${this.cargo}`
    }
}

const trabajador1= new Trabajador("Leo", 48, "backend")
const trabajador2= new Trabajador("daniel", 48, "fullstack")
console.log(trabajador1.mostrarTrabajador())
console.log(trabajador2.mostrarTrabajador())
console.log(persona1.mostrarPersona())

