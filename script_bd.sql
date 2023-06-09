-- DROP SCHEMA carrito;

CREATE SCHEMA carrito AUTHORIZATION postgres;

-- carrito.tipo_producto definition

-- Drop table

-- DROP TABLE carrito.tipo_producto;

CREATE TABLE carrito.tipo_producto (
	id bigserial NOT NULL,
	descripcion varchar(250) NOT NULL,
	reg_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	upd_date timestamp NULL,
	active bool NOT NULL DEFAULT true,
	CONSTRAINT tipo_producto_pk PRIMARY KEY (id)
);


-- carrito.productos definition

-- Drop table

-- DROP TABLE carrito.productos;

CREATE TABLE carrito.productos (
	id bigserial NOT NULL,
	sku int8 NOT NULL,
	id_tipo_producto int8 NOT NULL,
	valor int8 NOT NULL,
	cantidad int8 NOT NULL,
	nombre varchar(100) NOT NULL,
	descripcion varchar(250) NOT NULL,
	reg_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	upd_date timestamp NULL,
	active bool NOT NULL DEFAULT true,
	CONSTRAINT productos_pk PRIMARY KEY (id),
	CONSTRAINT productos_fk FOREIGN KEY (id_tipo_producto) REFERENCES carrito.tipo_producto(id)
);


-- carrito.carrito definition

-- Drop table

-- DROP TABLE carrito.carrito;

CREATE TABLE carrito.carrito (
	id bigserial NOT NULL,
	id_producto int8 NOT NULL,
	cantidad_agregada int8 NOT NULL,
	vendido bool NOT NULL DEFAULT false,
	reg_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	upd_date timestamp NULL,
	active bool NOT NULL DEFAULT true,
	CONSTRAINT carrito_pk PRIMARY KEY (id),
	CONSTRAINT carrito_fk FOREIGN KEY (id_producto) REFERENCES carrito.productos(id)
);