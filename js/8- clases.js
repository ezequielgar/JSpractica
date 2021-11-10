// CREAR UNA CLASE: con nombre , email, edad , direccion , foto de perfil , dni

class Usuario {
  // PRIMER METODO A CREAR -> su mision es crear objetos
  constructor(name, LastName, email, age, dni, ProfilePic, adress) {
    this.nombre = name;
    this.apellido = LastName;
    this.mail = email;
    this.edad = age;
    this.dni = dni;
    this.fotoPerfil = ProfilePic;
    this.direccion = adress;
    this.estado = true; //PARAMETRO POR DEFECTO
  }
  // AGREGAR METEDOS
  mostrarDatos() {
    //   document.write('<br>Nombre: ' + this.nombre + '<br>Apeliido: ' + this.apellido + ............)
    document.write(`<br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>Email: ${this.mail}
        <br>Edad: ${this.edad}
        <br>DNI: ${this.dni}
        <br>Foto de Perfil: ${this.fotoPerfil}
        <br>Direccion: ${this.direccion}
        <br>Estado: ${this.estado}   
        `);
  }
  //   Se puede crear la cantidad de metodos necesarios a usar por clase ej:
  mostrarEdad() {}
  mostrarHabilitacion() {}

  //crear propiedades conmutadas GET(muestra propiedades) y SET (modifica propiedades)
  get mostrarNombre() {
    return this.nombre;
  }

  get mostrarApellido() {
    return this.apellido;
  }

  set modifName(newName) {
    this.nombre = newName;
  }

  set modifLastName(newLastName) {
    this.apellido = newLastName;
  }
}

// herencia

class Alumno extends Usuario {
  constructor(
    name,
    LastName,
    email,
    age,
    dni,
    ProfilePic,
    adress,
    curso,
    legajo
  ) {
    // invoco al contructor de Usuario
    super(name, LastName, email, age, dni, ProfilePic, adress);
    // se agregan las nuevas propiedades de la clase de herencia
    this.curso = curso;
    this.legajo = legajo;
    this.calificaciones = [];
  }
  get mostrarLegajo() {
    return this.legajo;
  }

  // mostrarDatos() {
  //   document.write(`<br>Nombre: ${this.nombre}
  //       <br>Apellido: ${this.apellido}
  //       <br>Email: ${this.mail}
  //       <br>Edad: ${this.edad}
  //       <br>DNI: ${this.dni}
  //       <br>Foto de Perfil: ${this.fotoPerfil}
  //       <br>Direccion: ${this.direccion}
  //       <br>Estado: ${this.estado}
  //       <br>Curso: ${this.curso}
  //       <br>Legajo: ${this.legajo}`);
  // }
  mostrarDatosAlumno(){
    document.write(`<br>Curso: ${this.curso}
    <br>Legajo: ${this.legajo}`);
  }



}

// COMO CREAR UN OBJETO , CREAR INSTANCIAR
let ezequiel = new Usuario(
  "Ezequiel",
  "Garcia",
  "ezequielgarqgmail.com",
  31,
  34285409,
  "url",
  "aqui va la dire"
);
console.log(ezequiel);

// Usar metodos de la clase Usuario
ezequiel.mostrarDatos();

document.write(
  `<br><h6>Apellido y Nombre: ${ezequiel.mostrarNombre} ${ezequiel.mostrarApellido} </h6>`
);

ezequiel.modifName = "Nicolas";

document.write(
  `<h6>Apellido y Nombre: ${ezequiel.mostrarNombre} ${ezequiel.mostrarApellido} </h6>`
);

// crear un obj de la clase alumno
let ramiro = new Alumno(
  "Perez",
  "Ramiro",
  "ramiro@gmail.com",
  "25",
  "32444555",
  "alguna url",
  "direccion",
  "FullStack",
  "123"
);

document.write("<br>" + ramiro.mostrarLegajo);
ramiro.mostrarDatos();
ramiro.mostrarDatosAlumno();
