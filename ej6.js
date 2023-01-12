// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados. 
// Puedes usar este array para probar tu función:


const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe', 
    'pasta',
    'ice-cream', 
    'pizza', //ELIMINAR
    'chicken', 
    'onion rings',
    'pasta', //ELIMINAR
    'soda'
  ];

  function removeDuplicates(param) {

    for (let i = 0; i < duplicates.length; i++) {
      for (let a = i + 1; a < duplicates.length; a++) { 
        if (duplicates[i] === duplicates[a]) {
          duplicates.splice(i,1);
            i--;
        }
      }  
    }
    return console.log(duplicates);   
  }

  removeDuplicates(duplicates);