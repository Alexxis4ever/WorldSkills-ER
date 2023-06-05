// Build a function that returns an array of integers from n to 1 where n>0.
// n=5 --> [5,4,3,2,1]

// Cree una función que devuelva una matriz de enteros de n a 1 donde n>0.
//n=5 --> [5,4,3,2,1]

const buildFunction = (n) => {
  const arr = [];
  for (let index = n; index > 0; index--) {
    arr.push(index)
  }

  return arr
}

console.log(buildFunction(5));
