Identificamos las entidades:

Alumno

Solicitud

Definición de entidades:

Solicitud:

Código de solicitud

Tipo de solicitud

Descripción

Fecha

Estado

Alumno que la realizó

Alumno:

Código de alumno

Nombre completo

Correo institucional

Carrera

Ciclo

Creación de carpeta angular-pa1, con configuración específica y archivos por defecto:

npx @angular/cli@20.3.0 new angular-pa1 --standalone --style=scss --routing=false --ssr=false --skip-tests --package-manager=npm --defaults

Levantar angular (para confirmar si corre en el sistema) y detener su ejecución luego de su validación:

npx ng serve / Ctrl + C

Creación de models según observación de rúbrica:

alumno.ts

TypeScript
export interface Alumno {
  codigo: number;
  nombreCompleto: string;
  correoInstitucional: string;
  carrera: string;
  ciclo: number;
}
solicitud.ts

TypeScript
import { Alumno } from './alumno';

export interface Solicitud {
  codigo: number;
  tipo: string;
  descripcion: string;
  fecha: string;
  estado: string;
  alumno: Alumno;
}
src/app/models/alumno.ts - solicitud.ts

-> alumno.ts definirá como debe ser un Alumno y qué tipo tiene cada propiedad.
-> solicitud.ts definirá como debe ser una Solicitud y qué tipo tiene cada propiedad.

Considerar que Solicitud contiene/referencia a un Alumno: import { Alumno } from './alumno';

Aplicando tipado estático: El tipado estático significa que TypeScript conoce qué tipo de dato debe tener cada variable, propiedad, parámetro, etc., y puede detectar errores antes de ejecutar el programa.

-> Creamos carpeta data: src/app/data:

data/alumnos.ts -> importa -> models/alumno.ts

TypeScript
export const alumnos: Alumno[] = [
  {
    codigo: 10,
    nombreCompleto: 'Giancarlo Quispe',
    correoInstitucional: '72478618@mail.isil.pe',
    carrera: 'Desarrollo de Software',
    ciclo: 4
  },
  {
    codigo: 8,
    nombreCompleto: 'Pepe Lucho',
    correoInstitucional: '74747474@mail.isil.pe',
    carrera: 'Desarrollo de Software',
    ciclo: 4
  }
];
data/solicitudes.ts -> importa -> models/solicitud.ts

TypeScript
import { Solicitud } from '../models/solicitud';
import { alumnos } from './alumnos';

export const solicitudes: Solicitud[] = [
  {
    codigo: 1,
    tipo: 'Certificado de estudios',
    descripcion: 'Solicitud de certificado de estudios',
    fecha: '2026-09-20',
    estado: 'Pendiente',
    alumno: alumnos[0]
  },
  {
    codigo: 2,
    tipo: 'Cambio de horario',
    descripcion: 'Solicitud de cambio de horario',
    fecha: '2026-09-21',
    estado: 'En proceso',
    alumno: alumnos[1]
  }
];
Compilando archivos desde angular-pa1:

-> npx ng build

Integrando recursos de JavaScript ES6:

✅ TypeScript → uso de interfaces.

✅ Tipos de datos → string, number, etc.

✅ Tipado estático → Alumno[] y Solicitud[].

✅ Módulos → import / export.

✅ const → usado en alumnos y solicitudes.

Creamos una función para buscar por código y tipo:

TypeScript
export const solicitudCodigo = (codigo: number): Solicitud | undefined =>
  solicitudes.find(solicitud => solicitud.codigo === codigo);
console.log(solicitudCodigo(1)); // impresión en consola

export const solicitudTipo = (tipo: string): Solicitud | undefined =>
  solicitudes.find(solicitud => solicitud.tipo === tipo);
console.log(solicitudTipo("Cambio de horario")); // impresión en consola
Ejecución la función desde la consola, sin angular. Desde carpeta raíz:

npx tsx src/app/data/solicitudes.ts

Arquitectura de componentes Angular (Actividad 2 — Desarrollado por José):

Creación del componente SolicitudesComponent (src/app/components/solicitudes) para renderizar el listado en pantalla.

Creación del servicio centralizado SolicitudService (src/app/services/solicitud.service.ts) anotado con @Injectable({ providedIn: 'root' }) para almacenar y gestionar el listado de solicitudes consumiendo los datos estáticos.

Implementación de Data Binding:

Interpolación {{ solicitud.tipo }} y {{ solicitud.alumno.nombreCompleto }} para proyectar datos en las plantillas HTML.

Event Binding (click) para capturar eventos de interacción en el listado.

Control de flujo y directivas estructurales modernas en la plantilla HTML:

Uso de @for (solicitud of solicitudes; track solicitud.codigo) para iterar la lista de forma optimizada.

Uso de @if (solicitudes.length > 0) para controlar visualizaciones condicionales de estado.

Validación mediante compilación local y verificación de renderizado en http://localhost:4200/.

Formulario reactivo, validaciones y navegación (Actividad 3 — Desarrollado por Roberto Palacios):

Configuración de navegación centralizada en app.routes.ts:

Definición de la ruta /listado vinculada a SolicitudesComponent.

Definición de la ruta /registrar vinculada a RegistrarSolicitudComponent.

Redirección por defecto redirectTo: 'listado' para rutas vacías.

Inclusión de directivas routerLink en la barra de navegación del maquetado global (app.component.html).

Creación e implementación del componente RegistrarSolicitudComponent:

Importación e integración de ReactiveFormsModule.

Uso del patrón moderno de inyección de dependencias mediante la función inject() para FormBuilder, SolicitudService y Router.

Definición del formulario reactivo FormGroup agregando controles para codigoAlumno, tipo y descripcion.

Implementación de reglas de validación en tiempo real:

Validators.required en todos los controles para evitar campos vacíos.

Validators.minLength(10) en el campo descripción para validar la extensión del contenido.

Creación de método helper esCampoInvalido() para la comprobación de estado de los controles (invalid y touched).

Renderizado condicional en la plantilla SCSS/HTML con alertas visuales de error en rojo.

Lógica de persistencia y redirección:

Creación del método guardar() que arma el objeto Solicitud, recupera los datos del alumno mediante AlumnoService y registra el ítem a través de SolicitudService.agregarSolicitud().

Redirección automática hacia la ruta /listado usando router.navigate(['/listado']) tras guardar correctamente.

Sincronización final y control de versiones en GitHub:

-> git add .

-> git status

-> git commit -m "Actividad 3 completa - Routing, Reactive Forms y Validaciones"

-> git pull origin main --rebase (Resolución de conflicto en README.md)

-> git push -u origin main

**** REALIZADO **** GIANCARLO QUISPE

Actividad 1 — TypeScript

Interfaces/tipos.

Tipado estático.

Módulos.

ES6+.

No backend.

**** REALIZADO **** JOSÉ

Actividad 2 — Angular

Componentes.

Módulos / Standalone.

Data binding (Interpolación y Event Binding).

Directivas estructurales (@for, @if).

Servicio + Inyección de dependencias (@Injectable).

**** REALIZADO **** ROBERTO PALACIOS

Actividad 3 — Angular

Formulario reactivo (FormBuilder, ReactiveFormsModule).

Validaciones dinámicas (Validators.required, Validators.minLength).

Inyección con inject().

Enrutamiento y Navegación (app.routes.ts, Router, routerLink).

**** PENDIENTE ****

Actividad 4 — Angular + API

HttpClient.

Servicio.

Consumo de API REST.

Mostrar datos.