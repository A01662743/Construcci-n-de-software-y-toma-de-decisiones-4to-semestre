module.exports = (request, response, next) => {
    for (let privilegio of request.session.privilegios) {
        if (privilegio.privilegio == 'ver_sites') {
            return next();
        }
    }
    request.session.error = "No tienes acceso a este recurso, el incidente ha sido reportado";
    return response.redirect('/users/login');
}