const obtenerInformacion = (materia)=>{
    const materias = {
        fisica: ['Perez','Pedro', 'Pepito', 'Cofla', 'Maria'],
        programacion: ['Dalto','Pedro', 'Juan', 'Pepito'],
        logica: ['Hernandez','Pedro', 'Juan', 'Pepito', 'Cofla', 'Maria'],
        quimica: ['Rodriguez','Pedro', 'Juan', 'Pepito', 'Cofla', 'Maria']
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else{
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if(informacion !== false){
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style='color:red'>${profesor}</b><br>
    Los alumnos son : <b style='color:blue'>${alumnos}</b><br><br>`);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresenteS = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresenteS.push(' ' + info);
        }
    }
    return `<b style='color:blue'>${alumno}</b> está en ${cantidadTotal} clases: <b style='color:green'>${clasesPresenteS}</b><br><br>
    `;
}

mostrarInformacion('fisica');
mostrarInformacion('quimica');
mostrarInformacion('programacion');
mostrarInformacion('logica');

document.write(cantidadDeClases('Cofla'));
document.write(cantidadDeClases('Maria'));
document.write(cantidadDeClases('Pedro'));