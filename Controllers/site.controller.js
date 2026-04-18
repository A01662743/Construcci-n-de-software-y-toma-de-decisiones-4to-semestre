const Site = require('../models/site.model.js');
const path = require('path');

exports.get_new = (request, response, next) => {
    return response.render('new', {
        editar: false,
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn || '',
        username: request.session.username || '',
    });
};

exports.post_new = (request, response, next) => {
    const site = new Site(request.body.nombre, request.file.filename);
    site.save().then(() => {
        return response.redirect('/sites');
    }).catch((error) => {
        console.log(error);
        return next(error);
    });
};

exports.get_list = (request, response, next) => {
    Site.fetch(request.params.sitio_id).then(([rows, fieldData]) => {
        console.log(rows);
        return response.render('list', {
            privilegios: request.session.privilegios || [],
            isLoggedIn: request.session.isLoggedIn || '',
            username: request.session.username || '',
            sites: rows,
        });
    }).catch((error) => {
        console.log(error);
        return next(error);
    });
    
};

exports.get_buscar = (request, response, next) => {
    Site.buscar(request.params.sitio).then(([sites, fieldData]) => {
        return response.status(200).json({sites: sites});
    }).catch((error) => {
        console.log(error);
        return response.status(500).json({message: error.stack});
    });
}