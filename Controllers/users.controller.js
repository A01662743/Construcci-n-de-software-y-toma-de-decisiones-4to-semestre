const User = require("../models/user.model");
const bcrypt = require('bcrypt');

exports.get_signup = (request, response, next) => {
    response.render('signup', {
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn || '',
        username: request.session.username || '',
    });
};

exports.post_signup = (request, response, next) => {
    const usuario = new User(request.body.username, request.body.password, request.body.nombre);
    usuario.save().then(() => {
        return response.redirect('/users/login');
    }).catch((error) => {
        console.log(error);
        next(error);
    });
    
};

exports.get_login = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn || '',
        error: error,
        username: request.session.username ||'',
    });
};

exports.post_login = (request, response, next) => {
    User.fetchOne(request.body.username).then(([rows, fieldData]) => {
        if (rows.length < 1) {
            request.session.error = 'Usuario y/o password no coinciden';
            return response.redirect('/users/login');
        } else {
            bcrypt.compare(request.body.password, rows[0].password).then((doMatch) => {
                if (doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.username = request.body.username;
                    return request.session.save((error) => {
                        return response.redirect("/home");
                    });
                } else {
                    request.session.error = 'Usuario y/o password no coinciden';
                    return response.redirect('/users/login');
                }
            }).catch((error) => {
                console.log(error);
                next(error);
            });
        }
    }).catch((error) => {
        console.log(error);
        next(error);
    });
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};