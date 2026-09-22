import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud';
import { solicitudes } from '../data/solicitudes';
import { alumnos } from '../data/alumnos';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  // Inyección de HttpClient para la Actividad 4
  private http = inject(HttpClient);
  // URL de la API REST para consumo de datos remotos
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private listaSolicitudes: Solicitud[] = [...solicitudes];
  private listaAlumnos: Alumno[] = [...alumnos];

  // ==========================================
  // ACTIVIDAD 4: Consumo de API REST
  // ==========================================
  getSolicitudesApi(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ==========================================
  // ACTIVIDADES 2 y 3: Gestión local de datos
  // ==========================================
  
  // Método utilizado en Actividad 2
  obtenerSolicitudes(): Solicitud[] {
    return this.listaSolicitudes;
  }

  // Alias para obtener solicitudes
  getSolicitudes(): Solicitud[] {
    return this.listaSolicitudes;
  }

  // Obtiene los alumnos para el selector del formulario
  getAlumnos(): Alumno[] {
    return this.listaAlumnos;
  }

  // Agrega una nueva solicitud desde el formulario reactivo (Actividad 3)
  agregarSolicitud(solicitud: Omit<Solicitud, 'codigo' | 'fecha'>): void {
    const nuevaSolicitud: Solicitud = {
      ...solicitud,
      codigo: this.listaSolicitudes.length + 1,
      fecha: new Date().toISOString().split('T')[0]
    };
    this.listaSolicitudes.push(nuevaSolicitud);
  }
}