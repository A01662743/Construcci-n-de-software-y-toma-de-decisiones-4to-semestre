--Query 1
SELECT SUM(Cantidad) as "Total de Unidades", SUM(Cantidad * (Costo+Impuesto)) as 'Importe Total'
FROM Materiales M INNEr JOIN Entregan E ON M.Clave = E.Clave
WHERE Fecha Between '01/01/1997' AND '31/12/1997'

--Query 2
SELECT Clave, Descripcion
FROM Materiales

MINUS

SELECT Clave, Descripcion
FROM Materiales M, Entregan E
WHERE M.Clave = E.Clave

--Query 3
SELECT 
    M.Clave, 
    M.Descripcion, 
    SUM(E.Cantidad) AS CantidadTotal, 
    MIN(E.Cantidad) AS CantidadMinima, 
    MAX(E.Cantidad) AS CantidadMaxima, 
    SUM(E.Cantidad * M.Costo * (1 + M.PorcentajeImpuesto/100)) AS ImporteTotal
FROM Materiales M
JOIN Entregan E ON M.Clave = E.Clave
GROUP BY M.Clave, M.Descripcion
HAVING AVG(E.Cantidad) > 400;

--Query 4
SELECT 
    P.RazonSocial, 
    M.Clave, 
    M.Descripcion, 
    AVG(E.Cantidad) AS CantidadPromedio
FROM Proveedores P
JOIN Entregan E ON P.RFC = E.RFC
JOIN Materiales M ON E.Clave = M.Clave
GROUP BY P.RazonSocial, M.Clave, M.Descripcion
HAVING AVG(E.Cantidad) >= 500;

--Query 5
SELECT 
    P.RazonSocial, 
    M.Clave, 
    M.Descripcion, 
    AVG(E.Cantidad) AS CantidadPromedio
FROM Proveedores P
JOIN Entregan E ON P.RFC = E.RFC
JOIN Materiales M ON E.Clave = M.Clave
GROUP BY P.RazonSocial, M.Clave, M.Descripcion
HAVING AVG(E.Cantidad) < 370 
    OR AVG(E.Cantidad) > 450;

--Queries Insert
INSERT INTO Materiales VALUES (1440, Tablaroca, 70) ;
INSERT INTO Materiales VALUES (1450, Marmol, 300) ;
INSERT INTO Materiales VALUES (1460, Unicel, 35) ;
INSERT INTO Materiales VALUES (1470, Vidrio Templado, 120) ;
INSERT INTO Materiales VALUES (1480, Loseta, 100) ;

--Query 6
SELECT Clave, Descripcion
FROM Materiales
WHERE Clave NOT IN (SELECT Clave FROM Entregan);

--Query 7
SELECT P.RazonSocial
FROM Proveedores P
JOIN Entregan E ON P.RFC = E.RFC
JOIN Proyectos PR ON E.Numero = PR.Numero
WHERE PR.Denominacion = 'Vamos México'
AND P.RFC IN (
    SELECT E2.RFC 
    FROM Entregan E2
    JOIN Proyectos PR2 ON E2.Numero = PR2.Numero
    WHERE PR2.Denominacion = 'Querétaro Limpio'
);

--Query 8
SELECT Descripcion
FROM Materiales
WHERE Clave NOT IN (
    SELECT E.Clave
    FROM Entregan E
    JOIN Proyectos PR ON E.Numero = PR.Numero
    WHERE PR.Denominacion = 'CIT Yucatán'
);

--Query 9
SELECT P.RazonSocial, AVG(E.Cantidad) AS PromedioEntregada
FROM Proveedores P
JOIN Entregan E ON P.RFC = E.RFC
GROUP BY P.RFC, P.RazonSocial
HAVING AVG(E.Cantidad) > (
    SELECT AVG(Cantidad)
    FROM Entregan
    WHERE RFC = 'VAGO780901'
);

--Query 10
SELECT P.RFC, P.RazonSocial
FROM Proveedores P
JOIN Entregan E ON P.RFC = E.RFC
JOIN Proyectos PR ON E.Numero = PR.Numero
WHERE PR.Denominacion = 'Infonavit Durango'
GROUP BY P.RFC, P.RazonSocial
HAVING 
    SUM(CASE WHEN YEAR(E.Fecha) = 2000 THEN E.Cantidad ELSE 0 END) > 
    SUM(CASE WHEN YEAR(E.Fecha) = 2001 THEN E.Cantidad ELSE 0 END);