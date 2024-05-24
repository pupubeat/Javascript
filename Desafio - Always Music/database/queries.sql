DROP TABLE IF EXISTS ESTUDIANTES;

CREATE TABLE ESTUDIANTES(
	nombre varchar not null,
	rut varchar primary key,
	curso varchar,
	nivel varchar
);

SELECT * FROM ESTUDIANTES;

-- Seeders --
INSERT INTO ESTUDIANTES(nombre, rut, curso, nivel) VALUES
('Brian May', '12.345.678-9', 'guitarra', '10'),
('nombre-1', '13.459.663-7', 'curso-1', 'nivel-1'),
('nombre-2', '14.246.342-k', 'curso-2', 'nivel-2'),
('nombre-3', '20.654.247-0', 'curso-3', 'nivel-3');