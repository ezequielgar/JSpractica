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
 mostrarEdad(){}
 mostrarHabilitacion(){}


}

// COMO CREAR UN OBJETO , CREAR INSTANCIAR
let ezequiel = new Usuario('Ezequiel','Garcia','ezequielgarqgmail.com', 31,34285409,'url','aqui va la dire');
console.log(ezequiel);

// Usar metodos de la clase Usuario
ezequiel.mostrarDatos();
