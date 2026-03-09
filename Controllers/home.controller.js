exports.get_home = (request, response, next) => {
    response.render('home', {
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.IsLoggedIn || '',
        username: request.session.username || '',
    });
};