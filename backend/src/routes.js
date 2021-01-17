const express = require('express');


const jobsController = require('./controllers/jobsController');
const companyController = require('./controllers/companyController');
const roadLearingController = require('./controllers/roadLearingController');
const jovemController = require('./controllers/jovemController');
const courseController = require('./controllers/courseController');

const routes  = express.Router();

//metodos relacionados as vaga
routes.delete('/jobs/:id', jobsController.delete); //deleta 
routes.get('/jobs', jobsController.index);//lista 
routes.post('/jobs', jobsController.create);//cadastra 


//metodos relacionados a empresas
routes.get('/company', companyController.index);//lista empresas
routes.post('/company', companyController.create);//cadastra empresa

//metodos relacionados a trilha de apredizadem
routes.delete('/roadLearing/:id', roadLearingController.delete); //deleta
routes.get('/roadLearing', roadLearingController.index);//lista 
routes.post('roadLearing', roadLearingController.create);//cadastra 

//metodos relacionados as jovem
routes.post('/jovem', jovemController.create);//cadastra um jovem

//metodos relacionados aos cursos
routes.delete('/course/:id', courseController.delete); //deleta 
routes.get('/course', courseController.index);//lista
routes.post('/course', courseController.create);//cadastra

//metodos relacionados aos eventos
routes.delete('/jobs/:id', jobsController.delete); //deleta
routes.get('/jobs', jobsController.index);//lista 
routes.post('/jobs', jobsController.create);//cadastra 



module.exports = routes;



