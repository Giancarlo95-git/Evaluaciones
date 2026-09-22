// Tipado estático. Validando que no se tengan errores con los tipos de datos con Solicitud
import { Solicitud } from '../models/solicitud';
import { alumnos } from './alumnos';

export const solicitudes: Solicitud[] = [
  {
    codigo: 1,
    tipo: 'Certificado de estudios',
    descripcion: 'Solicitud de certificado de estudios',
    fecha: '2026-09-20',
    estado: 'Pendiente',
    alumno: alumnos[0]
  },
  {
    codigo: 2,
    tipo: 'Cambio de horario',
    descripcion: 'Solicitud de cambio de horario',
    fecha: '2026-09-21',
    estado: 'En proceso',
    alumno: alumnos[1]
  }
];

export const solicitudCodigo = (codigo: number): Solicitud | undefined =>
  solicitudes.find(solicitud => solicitud.codigo === codigo);
console.log(solicitudCodigo(1)) // impresión en consola

export const solicitudTipo = (tipo: string): Solicitud | undefined =>
  solicitudes.find(solicitud => solicitud.tipo === tipo);
console.log(solicitudTipo("Cambio de horario")) // impresión en consola