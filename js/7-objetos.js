//crear un Objeto con notacion literal
let usuario1 = {
    //se define propiedades del obj -> clave:valor
    email:'ezequielgar@gmail.com',
    name:'Ezequiel Garcia',
    adress:'Tucuman 4000',
    password:'123asd--',
    state:true,
    //metodos || funciones || acciones
    login:function (){
        document.write('<br>Usuario Logueado')
    }

}

//mostrar objeto
console.log(usuario1)

    //mostrar obj primera forma
    document.write('Email: ' + usuario1.email);
    document.write('<br>Localidad: ' + usuario1.adress);

    // mostrar objt segunda forma
    document.write('<br>Nombre: ' + usuario1['name']);

    //modificar una propiedad del objeto
    usuario1.adress = 'Yerba buena 4107'
    document.write('<br>Localidad: ' + usuario1.adress)

    //agregar una nueva propiedad al objeto
    usuario1.level = 1;
    document.write('<br>Nivel: ' + usuario1.level)

    //Borrar una propiedad de un objeto
    delete usuario1.state
    
//usar metodos
usuario1.login();


    