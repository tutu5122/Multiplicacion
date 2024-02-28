/*

Crear una función para solicitar el número y validar antes de mostrar el resultado que
el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al
rango, mostrar un mensaje al usuario: "número fuera del rango" (3 Puntos)

*/

const evaluarNumero = () => {

    let num = 0;
    do {
        num = parseInt(prompt('Ingrese un número entre 1 y 20'));

        if (isNaN(num)) {
            alert('Estimado debe ingresar un número');
            num = 0;
        } else if (num < 1 || num > 20) {
            alert('El número esta fuera del Rango')
        }
    } while (num < 1 || num > 20);

    //  Si el Número esta dentro del rango
    // alert('Heeee por fin ingreso correcto !!!!!!')

    tablaDeMultiplicar(num);
    calcularFactorial(num);

}

const tablaDeMultiplicar = (n) => {
    /*
        1 x 3 = 3
        2 x 3 = 6
        3 x 3 = 9
    */
    for (i = 1; i <= n; i++) {
        console.log(`${i} x ${n} = ${i * n}`)
    }

}


const calcularFactorial = (x) => {
    for (i = 1; i <= x; i++) {
        let res = 1

        for (j = 1; j <= i; j++) {
            res = res * j
        }
        console.log(`El factorial de ${i} es : ${res}`)
    }
}

evaluarNumero()