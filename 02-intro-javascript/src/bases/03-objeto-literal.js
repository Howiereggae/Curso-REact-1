// objetos literales

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: '45',
  direccion: {
      ciudad: 'New York',
      zip: 55321321,
      lat: 14.2323,
      long: 34.5354638,

  }
};
//console.table( persona );

const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2)