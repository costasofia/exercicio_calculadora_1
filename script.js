let inputForm = document.getElementById("input-number");
let resultado = document.getElementById("result");


//let Math.PI= 3.14159265358979323846;
function input(numero) {
    inputForm.value += numero;
}

function reset() {
    document.getElementById("formInput").reset(); //faz reset do input
    resultado.value = '';
    //inputForm.value=''; //faz reset do resultado final 
}

console.log('ola');
//console.log(document.getElementById('1').innerHTML);

function clean() {
    inputForm.value = inputForm.value.slice(0, -1); //do primeiro até ao penultimo 
}

function sin() {
  
    resultado.value = Math.sin(inputForm.value * Math.PI / 180);
    inputForm.value = 'sin' + ' ' + inputForm.value;

}

function cos() {
    resultado.value = Math.cos(inputForm.value * Math.PI / 180);
    inputForm.value = 'cos' + ' ' + inputForm.value;
}

function tan() {

    resultado.value = Math.tan(inputForm.value * Math.PI / 180);
    inputForm.value = 'tan' + ' ' + inputForm.value;
}
function sqrt() {
    resultado.value = Math.sqrt(inputForm.value);
    inputForm.value = '√' + inputForm.value;
}

function exp() {
    resultado.value = Math.exp(inputForm.value);
    inputForm.value = 'Exp:' + inputForm.value;
}

function ln() {
    resultado.value = Math.log(inputForm.value);
    inputForm.value = 'ln' + inputForm.value;
}

function log() {
    resultado.value = Math.log10(inputForm.value);
    inputForm.value = 'log' + inputForm.value;

}
function per() {
    if ((inputForm.value).includes('*')) {
        console.log(inputForm.value);
        var temp = eval(inputForm.value) / 100;
        console.log(temp);
        return resultado.value = temp;
    } else if ((inputForm.value).includes('/')) {
        console.log(inputForm.value)
        console.log(eval(inputForm.value));
        var temp = eval(inputForm.value) * 100;
        console.log(temp);
        return resultado.value = temp;
    } else if ((inputForm.value).includes('-')) {
        e = parseFloat((inputForm.value).slice(0, (inputForm.value).indexOf('-'))); //a
        f = parseFloat((inputForm.value).slice((inputForm.value).indexOf('-') + 1));//b
        console.log(e);
        console.log(f);
        // g = e * (f / 100); //d
        //temp = (e - g);
        temp = (e - (e * (f / 100)));
        return resultado.value = temp;
    } else if ((inputForm.value).includes('+')) {
        a = parseFloat((inputForm.value).slice(0, (inputForm.value).indexOf('+')));
        b = parseFloat((inputForm.value).slice((inputForm.value).indexOf('+') + 1));
        console.log(a);
        console.log(b);
        //var temp = (a+(a*(b/100)));
        // let c = (b/100);
        d = a * (b / 100);
        console.log(d);
        console.log(a);
        temp = (a + d);

        return resultado.value = temp;

    }

}
function abs() {
    resultado.value = Math.abs(inputForm.value);
    inputForm.value = '|' + inputForm.value + '|';
}
function divisao() {
    resultado.value = 1 / inputForm.value;
    inputForm.value = '1' + '/' + inputForm.value;
}
function expoente() {
    resultado.value = inputForm.value ** 2;
    inputForm.value = inputForm.value + '^' + '2';
}

function expoente3() {
    resultado.value = inputForm.value ** 3;
    inputForm.value = inputForm.value + '^' + '3';
}

/*
function factorial() {

    resultado.value = inputForm.value;

    while (inputForm.value > 1) {
        //Enquanto 4!=4*3*2*1
        inputForm.value--;
        console.log(inputForm.value);
        console.log(resultado.value);
        resultado.value *= inputForm.value;
    }

    inputForm.value = '';
}*/
function factorial() {
    let f = inputForm.value;
    let a = 1;
    if (f == 0 || f == 1) {
        resultado.value = 1;
        inputForm.value = inputForm.value + '!';
    } else {
        for (i = f; i >= 1; i--) {
            a *= i;
        }
        resultado.value = a;
        inputForm.value = inputForm.value + '!';
    }

}

function negPos() {
    let result = Math.sign(inputForm.value) > 0 ? 'positivo' : 'negativo';
    if (result === 'negativo') {
        inputForm.value = inputForm.value * (-(1));
        console.log('negativo');
    } else {
        inputForm.value = inputForm.value * (-1);
        console.log('positivo');
    }
}

function rad() {
    const pi = 3.14159265358979323846;
    resultado.value = (inputForm.value) * 180 / pi + '°';
    inputForm.value = inputForm.value + ' ' + 'rad';
}

function calc() {
    try {
        resultado.value = eval(inputForm.value);

    } catch (err) {  //caso tenha algum erro
        alert(err);
        console.log(err);
        reset();
    }
}
