import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudService } from '../../services/solicitud.service';
import { Solicitud } from '../../models/solicitud';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitudes.html',
  styleUrl: './solicitudes.scss',
})
export class Solicitudes implements OnInit {

  private solicitudService = inject(SolicitudService);

  // Lista local original (Actividades 1, 2 y 3)
  solicitudes: Solicitud[] = this.solicitudService.obtenerSolicitudes();

  solicitudSeleccionada: Solicitud | null = null;

  // Lista para almacenar los datos consumidos de la API REST (Actividad 4)
  datosApi: any[] = [];

  ngOnInit(): void {
    // Consumo asíncrono mediante HttpClient y RxJS
    this.solicitudService.getSolicitudesApi().subscribe({
      next: (data) => {
        // Guardamos los primeros 5 registros devueltos por la API
        this.datosApi = data.slice(0, 5);
      },
      error: (err) => console.error('Error al consumir la API REST:', err)
    });
  }

  verDetalle(solicitud: Solicitud): void {
    this.solicitudSeleccionada = solicitud;
  }

}