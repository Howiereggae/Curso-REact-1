
// Destructuracion
// Asignacion Dessestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Iromman',
};

//const { nombre, edad, clave } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const useContext = ({ clave, nombre, edad, rango = '(capitan)' }) => {

  // console.log( nombre, edad, rango, );

  return {
    nombreClave: clave,
    anios: edad,

  }
}

const { nombreClave, anios } = useContext( persona );

console.log(nombreClave, anios)




