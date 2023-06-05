// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Jenny ha escrito una función que devuelve un saludo a un usuario. Sin embargo, está enamorada de Johnny y le gustaría saludarlo un poco diferente. Agregó un caso especial a su función, pero cometió un error.

function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
  } else {
  return "Hello, " + name + "!";
  }
}

console.log(greet("Jim"));
console.log(greet("Aleja"));
console.log(greet("Johnny"));

