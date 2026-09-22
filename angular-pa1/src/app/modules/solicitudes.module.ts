import { NgModule } from '@angular/core';
import { Solicitudes } from '../components/solicitudes/solicitudes';

@NgModule({
  imports: [Solicitudes],
  exports: [Solicitudes]
})
export class SolicitudesModule {}