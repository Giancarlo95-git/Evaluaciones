# README — Evaluación

> **Curso:** PROGRAMACION WEB AVANZADA
> **Sección/Código:** 4060.202620
> **Evaluación:** PA1
> **Equipo:** Grupo 6

## 1. Integrantes

| Integrante | Rol | Aporte principal |
|---|---|---|
| Giancarlo Quispe | Developer / Frontend | Actividad 1: Modelos, interfaces TypeScript, módulo ES6+ y tipado estático. |
| José Polick | Developer / Frontend | Actividad 2: Componente `SolicitudesComponent`, `SolicitudService`, Data Binding y directivas `@for` / `@if`. |
| Roberto Palacios | Lead Developer / Frontend | Actividades 3 y 4: Formulario reactivo con validaciones (`FormBuilder`), Enrutamiento (`app.routes.ts`) y consumo de API REST con `HttpClient` / RxJS. |

## 2. Descripción y objetivo

**Problema:**
El sistema requería gestionar solicitudes académicas de alumnos de manera modularizada, permitiendo el registro, validación y consulta de datos locales y remotos sin acoplar la lógica de acceso a datos con la vista.

**Objetivo:**
Desarrollar una aplicación SPA en Angular utilizando arquitectura Standalone, TypeScript estático, Reactive Forms, Angular Router y consumo de API REST mediante `HttpClient` de forma asíncrona.

**Solución desarrollada:**
Se implementó una solución frontend estructurada en Angular con componentes independientes, inyección de dependencias moderna mediante `inject()`, validación en tiempo real de formularios, navegación SPA y consumo de una fuente pública REST (`JSONPlaceholder`) renderizada dinámicamente mediante `@for` y `@if`.

## 3. Cómo ejecutar o revisar

```bash
# Clonar el repositorio
git clone https://github.com/Giancarlo95-git/Evaluaciones.git

# Entrar a la carpeta del proyecto
cd angular-pa1

# Instalar dependencias
npm install

# Levantar el servidor local de desarrollo
npx ng serve
```

**Pasos de revisión:**

1. Abrir la dirección `http://localhost:4200/` en el navegador web.
2. Navegar entre el listado (`/listado`) y el registro de solicitudes (`/registrar`) mediante las opciones del menú.
3. Probar las validaciones del formulario intentando enviar campos vacíos o con descripciones menores a 10 caracteres.
4. Verificar al final de la página del listado la sección "Datos Remotos consumidos desde API REST", la cual carga 5 registros asíncronos mediante `HttpClient`.

> No publicar contraseñas, tokens, credenciales ni datos sensibles.

## 4. Evidencias

- **Actividad 1:** Interfaces y datos tipados en `src/app/models/` y `src/app/data/`.
- **Actividad 2:** Renderizado de tarjetas de solicitudes y uso de `@for` / `@if` en la vista `solicitudes.html`.
- **Actividad 3:** Formulario funcional en `/registrar` con reglas de validación `Validators.required` y `Validators.minLength(10)`.
- **Actividad 4:** Petición HTTP GET a la API REST de prueba (JSONPlaceholder) mediante `SolicitudService.getSolicitudesApi()` renderizada en pantalla.

## 5. Matriz de participación

| Integrante | Desarrollo | Pruebas | Documentación | Exposición | Evidencia de participación |
|---|---|---|---|---|---|
| Giancarlo Quispe | Alta | Alta | Media | Sí | Commits iniciales, interfaces TypeScript y datos iniciales |
| José Polick | Alta | Alta | Media | Sí | Integración de SolicitudesComponent y data binding |
| Roberto Palacios | Alta | Alta | Alta | Sí | Commits de Routing, Reactive Forms, HttpClient y README |

## 6. Video de exposición

Video público de YouTube: `[PEGAR AQUÍ EL ENLACE DEL VIDEO]`

Todos los integrantes deben participar en la exposición con sus cámaras prendidas y explicar el procedimiento, la solución desarrollada y las decisiones tomadas.

## 7. Conclusiones

**Base Estructural y Tipado Estático (Actividad 1):**
La Actividad 1 permitió establecer una base sólida para el desarrollo de la Plataforma de Gestión de Solicitudes Académicas, aplicando TypeScript mediante tipado estático, interfaces y módulos, junto con características de ES6+. Además, se comprobó la ejecución y compilación del código, dejando una estructura organizada que podrá ser utilizada en las siguientes etapas del proyecto.

**Desacoplamiento y Componentes (Actividad 2):**
El uso de componentes Standalone y servicios centralizados con `@Injectable` permitió proyectar la información del dominio en plantillas mediante Data Binding y directivas estructurales modernas (`@for`, `@if`), logrando una separación limpia entre la presentación y los datos.

**Experiencia de Usuario e Integridad de Datos (Actividad 3):**
La implementación de Formularios Reactivos con `ReactiveFormsModule` y validadores dinámicos (`Validators.required`, `Validators.minLength`) asegura la captura correcta de información en tiempo real antes de registrar la solicitud en el sistema.

**Asincronía y Consumo de Servicios Web (Actividad 4):**
La integración de `provideHttpClient()` junto con los Observables de RxJS facilita la conexión asíncrona con fuentes de datos externas (API REST), permitiendo actualizar dinámicamente la interfaz sin necesidad de recargar la página web.