import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
  {
    path: 'listado',
    loadComponent: () =>
      import('./components/solicitudes/solicitudes').then((m) => m.Solicitudes)
  },
  {
    path: 'registrar',
    loadComponent: () =>
      import('./components/registrar-solicitud/registrar-solicitud').then(
        (m) => m.RegistrarSolicitud
      )
  },
  { path: '**', redirectTo: 'listado' }
];