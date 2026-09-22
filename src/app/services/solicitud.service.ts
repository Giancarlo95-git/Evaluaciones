import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';
import { solicitudes } from '../data/solicitudes';
import { alumnos } from '../data/alumnos';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private listaSolicitudes: Solicitud[] = [...solicitudes];
  private listaAlumnos: Alumno[] = [...alumnos];

  // Mantiene el método que ya usaba tu compañero en la Actividad 2
  obtenerSolicitudes(): Solicitud[] {
    return this.listaSolicitudes;
  }

  // Alias por si se llama getSolicitudes()
  getSolicitudes(): Solicitud[] {
    return this.listaSolicitudes;
  }

  // Permite obtener los alumnos para el menú desplegable (select) del formulario
  getAlumnos(): Alumno[] {
    return this.listaAlumnos;
  }

  // Agrega la nueva solicitud enviada desde el formulario
  agregarSolicitud(solicitud: Omit<Solicitud, 'codigo' | 'fecha'>): void {
    const nuevaSolicitud: Solicitud = {
      ...solicitud,
      codigo: this.listaSolicitudes.length + 1,
      fecha: new Date().toISOString().split('T')[0]
    };
    this.listaSolicitudes.push(nuevaSolicitud);
  }
}