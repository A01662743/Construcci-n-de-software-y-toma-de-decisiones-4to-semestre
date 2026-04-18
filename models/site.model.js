//const sites = [
//    {
//        nombre: "CodeForces",
//        imagen: "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcer3l19eex0wy900b101.jpg"
//    },
//    {
//        nombre: "Coolors",
//        imagen: "https://infoactivismo.org/wp-content/uploads/2016/10/coolors.jpg"
//];


const db = require('../util/database.js');


module.exports = class Site {

    //Constructor de la clase. Sirve para crear un nuevo objeto, 
    // y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_imagen) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO sitios(nombre, imagen) VALUES(?, ?)',
            [this.nombre, this.imagen]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM sitios');
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM sitios WHERE id = ?', [id]);
    }

    static fetch(id){
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
        
    }

    static edit(id, nombre, imagen) {
        return db.execute(
            `UPDATE sitios SET nombre=?, imagen=? WHERE id=?`,
            [nombre, imagen, id]
        );
    }

}