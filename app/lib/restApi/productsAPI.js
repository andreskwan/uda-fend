var app    = require('express')();
var logger = require('../logger/logger.js');

var db     = {};

app.route('/notas/:id?')
	.all( function (req, res, next) {
		// logger.info("req.method: ",req.method);
		// logger.info("req.path: ",req.path);
		// logger.info("req.body: ",req.body);
		res.set('Content-Type', 'application/json');
		next();
	})
	//POST
	.post( function (req, res){
		var notaNueva    = req.body.nota;
		notaNueva.id     = Date.now();
		db[notaNueva.id] = notaNueva;
		res
		.status(201)
		.json({
			nota: notaNueva
		}); 
	})
	//GET
	.get( function (req, res, next){
		var id   = req.params.id;
		// logger.info("db content: ",db)
		var nota = db[id];
		if (!id){
			return next();
		}
		if (!nota) {
			res.status(400);
			return res.send('Not Found');
		}
		res
		.json({
			notas:nota
		})
	})
	//PUT
	.put( function (req, res, next){
		//obtengo id from params y la nota modificada
		// logger.info("PUT - server")
		// logger.info("PUT - req.params: ",req.params);
		var id              = req.params.id;
		//if not id
		//what about if it is invalid?
		//what about if it not exist a note related?
		if (!id) {
	      return next();
    	}

		// logger.info("PUT - id",id);
		// //without modification
		// logger.info("PUT - db[id] ",db[id]);

		var notaActualizada = req;
		// logger.info("req: ", req);
		// logger.info("PUT - req.params: ",req.body);

		//remplazar la nota, con la nueva info
		//req.body.nota
		db[id]              = req.body.nota;
		// logger.info("PUT - db[id] ",db[id]);
		//respondo
		var nota = db[id];
		res
		.status(200)
		.json({
			nota : db[id]
		});
	})
	.delete( function (req, res){
		var id = req.params.id;
		//if null id but what about if there is not an obj
		//correlated with id in the db?
		if (!id){
			return next();
		}
		// logger.info("En Delete Antes db content: ",db)
		delete db[id];
		// logger.info("En Delete Despues db content: ",db)
		res
		.status(204)
		.send();
	});

module.exports = app;
