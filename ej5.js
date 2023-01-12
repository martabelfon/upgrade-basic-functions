// **Iteración #5: Calcular promedio de strings**

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo 
// contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  
  let count = 0;

  for (let i = 0; i < mixedElements.length; i++) {
    
    if (typeof mixedElements[i] === "string") {
      count += mixedElements[i].length;
    } else {
      count += mixedElements[i];    
    }
    
  }

  return console.log(count);
  
}
averageWord(mixedElements);