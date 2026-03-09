const Site = require('../models/site.model.js');
const path = require('path');

exports.get_new = (request, response, next) => {
    response.render('new', {
        username: request.session.username || '',
    });
};

exports.post_new = (request, response, next) => {
    const site = new Site(request.body.nombre, request.body.imagen);
    site.save().then(() => {
        return response.redirect('/sites');
    }).catch((error) => {
        console.log(error);
        throw error;
    });
};

exports.get_list = (request, response, next) => {
    Site.fetch(request.params.sites_id).then(([rows, fielData]) => {
            return response.render('list', {
                username: request.session.username || '',
                sitios: rows
            });
        }).catch((error) => {
            console.log(error);
            next(error);
        });  //Manda la respuesta
};