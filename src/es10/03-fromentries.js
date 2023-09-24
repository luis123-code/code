const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
  ] 
  
  const usuario = Object.fromEntries(arrayEntries)
  /* {
    name: 'Andres',
    email: 'andres@correo.com',
    age: 23
  }
  */