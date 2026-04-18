module.exports = (request, response, next) => {
    for (let privilegio of request.session.privilegios) {
        if (privilegio.privilegio == 'anadir_sitios') {
            return next();
        }
    }
    request.session.error = "No tienes privilegios para este recurso, el incidente ha sido reportado.";
    return response.redirect('/users/login');
}