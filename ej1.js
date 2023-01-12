// **Iteración #1: Buscar el máximo**

// Completa la función que tomando dos números como argumento devuelva el más alto.


function sum(numberOne , numberTwo) {
    if (numberOne < numberTwo) {
        console.log(numberTwo)
    } if (numberOne > numberTwo) { 
        console.log(numberOne)
    } else {
        console.log ("Los numeros son iguales, numero 1 : " + numberOne + " numero 2: " + numberTwo)
    }
  }

  sum(50,50);