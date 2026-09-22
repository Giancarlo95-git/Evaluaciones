import { Component, inject } from '@angular/core';
import { SolicitudService } from '../../services/solicitud.service';
import { Solicitud } from '../../models/solicitud';

@Component({
  selector: 'app-solicitudes',
  imports: [],
  templateUrl: './solicitudes.html',
  styleUrl: './solicitudes.scss',
})
export class Solicitudes {

  private solicitudService = inject(SolicitudService);

  solicitudes: Solicitud[] = this.solicitudService.obtenerSolicitudes();

  solicitudSeleccionada: Solicitud | null = null;

  verDetalle(solicitud: Solicitud): void {
    this.solicitudSeleccionada = solicitud;
  }

}
