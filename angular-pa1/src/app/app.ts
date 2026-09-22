import { Component, signal } from '@angular/core';
import { SolicitudesModule } from './modules/solicitudes.module';

@Component({
  selector: 'app-root',
  imports: [SolicitudesModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-pa1');
}
