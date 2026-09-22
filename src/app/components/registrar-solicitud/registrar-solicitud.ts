import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudService } from '../../services/solicitud.service';

@Component({
  selector: 'app-registrar-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registrar-solicitud.html',
  styleUrl: './registrar-solicitud.scss'
})
export class RegistrarSolicitud {
  private fb = inject(FormBuilder);
  private solicitudService = inject(SolicitudService);
  private router = inject(Router);

  alumnos: any[] = this.solicitudService.getAlumnos();

  form: FormGroup = this.fb.group({
    alumnoId: ['', Validators.required],
    tipo: ['Académica', Validators.required],
    descripcion: ['', [Validators.required, Validators.minLength(10)]]
  });

  isInvalid(campo: string): boolean {
    const control = this.form.get(campo);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { alumnoId, tipo, descripcion } = this.form.value;
    const alumnoEncontrado = this.alumnos.find((a: any) => a.codigo === Number(alumnoId));

    if (alumnoEncontrado) {
      this.solicitudService.agregarSolicitud({
        tipo,
        descripcion,
        estado: 'Pendiente',
        alumno: alumnoEncontrado
      } as any);

      this.router.navigate(['/listado']);
    }
  }
}