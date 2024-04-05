# Propuesta TP DSW

## Grupo
### Integrantes
* 50970 Bouvier, Juan Adrián
* 42969 Zapata, Mayra Belen
* 50839 Tejedor Paloma
* 48711
## Tema
### Descripción

### Club de Deportes

Realizaremos un software para la administración de un Club de Deportes. Este egistrará los datos de las personas socias y los empleados, permitirá dar de alta, dar baja y ejecutar la modificación de los diferentes deportes para el club. Permitirá organizar torneos para las personas que sean socias. Los socios deberan abonar mensualmente su cuota dependiendo su edad, ya que se pueden realizar diferentes promociones y descuentos.

### Modelo

![TP Diagrama de Clases drawio](https://github.com/JotaBame/TP-DSW-304/assets/63957828/f0b4aa2f-7e6e-4e3e-9be5-abe18613ccc0)

## Alcance Funcional 

### Alcance Mínimo

*Nota*: el siguiente es un ejemplo para un grupo de 3 integrantes para un sistema de hotel. El 

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Tipo Habitacion<br>2. CRUD Servicio<br>3. CRUD Localidad|
|CRUD dependiente|1. CRUD Habitación {depende de} CRUD Tipo Habitacion<br>2. CRUD Cliente {depende de} CRUD Localidad|
|Listado<br>+<br>detalle| 1. Listado de habitaciones filtrado por tipo de habitación, muestra nro y tipo de habitación => detalle CRUD Habitacion<br> 2. Listado de reservas filtrado por rango de fecha, muestra nro de habitación, fecha inicio y fin estadía, estado y nombre del cliente => detalle muestra datos completos de la reserva y del cliente|
|CUU/Epic|1. Reservar una habitación para la estadía<br>2. Realizar el check-in de una reserva|



