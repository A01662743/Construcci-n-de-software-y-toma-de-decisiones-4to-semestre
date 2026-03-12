module.exports = (request, response, next) => {
    let continuar = true;
    for (let privilegio of request.session.privilegios) {
        if (privilegio.privilegio == 'ver_sites'){
            next();
            continuar = false;
        }
    }
    next();
    if (continuar == true){
        request.session.error = "No tienes acceso a este recurso, el incidente ha sido reportado";
        return response.redirect('/users/login');
    }
}