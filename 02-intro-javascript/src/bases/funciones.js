
//Funciones en JS

const saludar = function ( nombre ) {
return `Hola, ${ nombre }`;
}



console.log(saludar('Goku'));

console.log( saludar )

const getUsuarioActivo = ( nombre ) =>({
     uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( getUsuarioActivo );
