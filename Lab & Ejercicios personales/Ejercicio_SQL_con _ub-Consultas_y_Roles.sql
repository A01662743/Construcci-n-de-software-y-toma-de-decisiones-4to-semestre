/*1.- Actrices de “Las brujas de Salem”.*/
SELECT Nombre
FROM Elenco E, Actor A
WHERE E.Nombre = A.Nombre
AND A.Sexo = 'F' AND E.titulo = 'Las brujas de Salem'

/**/
SELECT Nombre
FROM Elenco
WHERE Titulo = 'Las brujas de Salem'
AND Nombre IN (SELECT Nombre
			FROM Actor
			WHERE Sexo = 'F')
		
/*2.- Nombres de los actores que aparecen en películas producidas por MGM en 1995.*/
SELECT nombre
FROM Elenco E
JOIN pelicula A on E.titulo = A.titulo
AND E.año = A.año
WHERE año = 1995 AND nomestudio = 'MGM';

SELECT nombre
FROM elenco E
WHERE año = 1995 AND titulo IN (SELECT titulo FROM pelicula P WHERE nomestudio

/*3.- Películas que duran más que “Lo que el viento se llevó” (de 1939).*/
SELECT titulo FROM Peliculas
WHERE duracion >
(SELECT duracion FROM Peliculas WHERE titulo = 'Lo que el viento se llevo' AND año =  1939)

/*4.- Productores que han hecho más películas que George Lucas.*/
SELECT PR.nombre, COUNT(PR.idproductor)
FROM Productor PR
JOIN Pelicula Pl on PR.idproductor = Pl.idproductor
GROUP BY PR.nombre
HAVINg COUNT (PR.idproductor) > (SELECT COUNT(idproductor)
FROM Productor PR
JOIN Pelicula Pl ON PR.idproductor = Pl.idproductor
WHERE PR.nombre = 'George Lucas');

/*5.- Nombres de los productores de las películas en las que ha aparecido Sharon Stone.*/
SELECT PR.nombre
FROM productor PR
INNER JOIN pelicula P ON PR.idproductor = P.idproductor
INNER JOIN elenco E ON P.titulo=E.titulo And P.año=E.año
WHERE E.nombre='Sharon Stone'

/*6.- Título de las películas que han sido filmadas más de una vez*/
SELECT titulo, COUNT(titulo) as 'cantidad de veces filmada'
FROM Peliculas
GROUP BY titulo
HAVING COUNT(titulo) > 1