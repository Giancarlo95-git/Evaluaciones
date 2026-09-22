//Importación de ALumno

import { Alumno } from './alumno';

// Definición de Solicitud

export interface Solicitud {
  codigo: number;
  tipo: string;
  descripcion: string;
  fecha: string;
  estado: string;
  alumno: Alumno;
}