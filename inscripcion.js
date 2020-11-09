let materias = {
    fisica: ['Perez','Pedro', 'Pepito', 'Cofla', 'Maria'],
    programacion: ['Dalto','Pedro', 'Juan', 'Pepito'],
    logica: ['Hernandez','Pedro', 'Juan', 'Pepito', 'Cofla', 'Maria'],
    quimica: ['Rodriguez','Pedro', 'Juan', 'Pepito', 'Cofla', 'Maria']
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if(personas.length >= 20){
        document.write('Lo siento ' + alumno + ' las clases de ' + materia + ' ya estan llenas');
    } else{
        personas.push(alumno);
        if(materia == 'fisica'){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if(materia == 'programacion'){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        }
        else if(materia == 'logica'){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }
        }
        else if(materia == 'quimica'){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            }
        }
        document.write('Felicidades ' + alumno + '! te has inscrito a ' + materia + ' correctamente<br>')
    }
}


document.write(materias['fisica'] + '<br>');

inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');
inscribir('pedrito','fisica');

document.write('<br>' + materias['fisica']);