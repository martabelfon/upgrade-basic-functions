// **Iteración #4: Calcular el promedio**

// Calcular un promedio es una tarea extremadamente común. 
// Puedes usar este array para probar tu función:


const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
      count += numbers[i]; 
  }
  
  return console.log(count / numbers.length);
  
}

average(numbers);