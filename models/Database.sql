-- CREAMOS UNA DATABASE --

create database escuelaDanza;

-- seleccionar la database a utilizar --
use escuelaDanza;

create table Persona(
idPersona int zerofill auto_increment not null,
nombre varchar(120),
apellido varchar(100),
telefono int,
email varchar(80),
consulta varchar(300),
primary key(idPersona)
);

-- Eliminamos una database --
drop database escueladanza;

-- Eliminamos una tabla --
DROP TABLE PERSONA;

-- INSERTAR DATOS EN LA TABLA (van a cargarse por orden)
insert into persona values(null, "Pepe", "Perez", 123456, "pepe@gmail.com", "holaaa");

