// Tipado estático. Validando que no se tengan errores con los tipos de datos con Alumno

import { Alumno } from '../models/alumno';

export const alumnos: Alumno[] = [
  {
    codigo: 10,
    nombreCompleto: 'Giancarlo Quispe',
    correoInstitucional: '72478618@mail.isil.pe',
    carrera: 'Desarrollo de Software',
    ciclo: 5
  },
  {
    codigo: 8,
    nombreCompleto: 'Pepe Lucho',
    correoInstitucional: '74747474@mail.isil.pe',
    carrera: 'Desarrollo de Software',
    ciclo: 3
  }
];

export const solicitudAlumnoCodigo = (codigo: number): Alumno | undefined =>
  alumnos.find(alumno => alumno.codigo === codigo);
console.log(solicitudAlumnoCodigo(8)) // impresión en consola