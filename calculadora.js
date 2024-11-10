let pantalla = document.getElementById('pantalla');
let operador = '';
let operadorActual = '';
let operandoAnterior = '';
let resultado = 0;
let esperandoNuevoOperando = false;

function agregarNumero(numero) {
    if (pantalla.innerText === '0' || esperandoNuevoOperando) {
        pantalla.innerText = numero;
        esperandoNuevoOperando = false;
    } else {
        pantalla.innerText += numero;
    }
    operadorActual += numero;
}

function operar(op) {
    if (operadorActual === '' && operador !== '') {
        operador = op;
        pantalla.innerText = pantalla.innerText.slice(0, -1) + op;
        return;
    }

    if (operadorActual !== '') {
        if (operandoAnterior !== '') {
            calcular();
        } else {
            resultado = parseFloat(operadorActual);
        }
    }

    operador = op;
    operandoAnterior = operadorActual;
    operadorActual = '';
    esperandoNuevoOperando = true;
    pantalla.innerText += op;
}

function calcular() {
    let current = parseFloat(operadorActual);

    if (isNaN(resultado) || isNaN(current)) return;

    switch (operador) {
        case '+':
            resultado += current;
            break;
        case '-':
            resultado -= current;
            break;
        case '*':
            resultado *= current;
            break;
        case '/':
            if (current === 0) {
                pantalla.innerText = 'No se puede dividir entre 0';
                return;
            }
            resultado /= current;
            break;
        default:
            return;
    }

    operadorActual = resultado.toString();
    operador = '';
    operandoAnterior = '';
    pantalla.innerText = resultado;
    esperandoNuevoOperando = true;
}

function limpiar() {
    pantalla.innerText = '0';
    operador = '';
    operadorActual = '';
    operandoAnterior = '';
    resultado = 0;
    esperandoNuevoOperando = false;
}
