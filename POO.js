class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = 'Soy ' + especie + ', tengo ' + edad + ' años y soy de color ' + color;
    }
    verInformacion(){
        document.write(this.informacion + "<br>");
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie,edad,color);
        this.raza = null;
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro('perro', 5,'marron','salchicha');
const gato = new Animal('gato', 2,'negro');
const pajaro = new Animal('pajaro', 1,'verde');

perro.setRaza = 'Pedro';
document.write(perro.raza);
document.write(perro.getRaza);