/*El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado.*/
SELECT Nombre, SUM(Sueldo) as 'Ingresos Totales'
FROM Elenco
GROUP BY Nombre
ORDER BY SUM(Sueldo) DESC

/*El monto total destinado a películas por cada Estudio Cinematográfico, durante la década de los 80's.*/
SELECT nomestudio, SUM(presupuesto) as 'Monto Total'
FROM Pelicula
WHERE año BETWEEN 1980 AND 1989
GROUP BY nomestudio
ORDER BY SUM(presupuesto) DESC;

/*Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dolares por película.*/
SELECT nombre, AVG(sueldo) as 'Sueldo Promedio' FROM Elenco, Actor
WHERE Elenco.nombre = Actor.nombre 
AND sexo =  'M'
Group by Actor.nombre
HAVING AVG(sueldo) > 5,000,000 DESC;

/* Título y año de producción de las películas con menor presupuesto.
(Por ejemplo, la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto).*/
SELECT titulo, año, MIN(presupuesto) AS 'presupuesto min por película'
FROM Pelicula
GROUP BY titulo
ORDER BY MIN(presupuesto) DESC;

/*Mostrar el sueldo de la actriz mejor pagada.*/
SELECT Max(Sueldo) as Sueldo_Maximo FROM Elenco, Actor
WHERE Elenco.nombre = Actor.nombre 
AND Actor.sexo = 'F';