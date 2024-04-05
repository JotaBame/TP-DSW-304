# Propuesta TP DSW

## Grupo
### Integrantes
* 50970 Bouvier, Juan Adrián
* 42969 Zapata, Mayra Belen
  
## Tema
### Descripción
Club de Deportes
Realizaremos un software para administrar un club de deportes. Registrará los datos de socios y empleados, permitirá dar de alta, baja y modificar deportes para el club. Permitirá organizar torneos y le permitirá a un socio pagar sus cuotas mensuales a través de la aplicación, la cual también lo mantendra informado de descuentos y recargos. 

### Modelo
[imagen del modelo]()


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



