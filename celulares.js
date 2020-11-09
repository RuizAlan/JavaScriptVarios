class Celular {
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.mermoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if (this.encendido == false){
            alert('Celular prendido');
            this.encendido = true;
        } else{
            alert('El celular ya está encendido')
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert('Reiniciando celular');
        }
    }
    tomarFoto(){
        alert('Foto tomada en una resolución de: ' + this.resolucionDeCamara);
    }
    grabarVideo(){
        alert('Grabando video en ' + this.resolucionDeCamara);
    }
    mobileInfo(){
        return `
        Color: ${this.color}</br>
        Peso: ${this.peso}</br>
        Tamaño: ${this.tamaño}</br>
        Mermoria ram: ${this.mermoriaRam}</br>
        Resolución de video: ${this.resolucionDeCamara}</br>
        `;
    }
}

class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    gravarVideoLento(){
        alert('Estas grabando en cámara lenta');
    }
    reconocimientoFacial(){
        alert('Vamos a iniciar un reconocimiento facial');
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolución de cámara extra: ${this.resolucionDeCamaraExtra}`;
    }
}


// celular1 = new Celular ('rojo','150g','5','HD', '1GB');
// celular2 = new Celular ('negro','155g','5.4','Full HD', '2GB');
// celular3 = new Celular ('blanco','146g','5.9','Full HD', '2GB');

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama('rojo', '130g', '5.2', '4K','3GB', 'Full HD');
celular2 = new CelularAltaGama('negro', '142g', '6', '4K','4GB', 'HD');

document.write(`
    Primer celular de Alta Gama: <br>
    ${celular1.infoAltaGama()} <br><br>
    Segundo celular de Alta Gama: <br>
    ${celular2.infoAltaGama()} <br>
    `)