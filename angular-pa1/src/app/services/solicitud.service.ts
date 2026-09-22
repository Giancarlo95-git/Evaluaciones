import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';
import { solicitudes } from '../data/solicitudes';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  obtenerSolicitudes(): Solicitud[] {
    return solicitudes;
  }

}
