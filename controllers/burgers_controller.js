var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	models.Burger.findAll({
		attributes:['id','burger_name','devoured','customer']
	}).then(function(burgers){
		var hbsObject = { burgers: burgers };
		console.log(hbsObject);
		res.render('index',hbsObject);
	})
});

router.post('/burgers/create', function (req, res) {
	models.Burger.create({
		'burger_name': req.body.burger_name, 
		'devoured': 0
	}).then(function(newburger){
		res.redirect('/burgers');
	})	
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = req.params.id;
	var customer = req.body.customer;
	models.Customer.create({name:customer})
	.then(function(customer){
	customer.update({BurgerId: condition})
});
	
	models.Burger.findOne({where:{id:condition}})
	.then(function(burger){
		burger.update({ devoured: 1, customer:customer })
		
	})
		res.redirect('/burgers');
	})	


router.delete('/burgers/delete/:id', function (req, res) {
	var condition = req.params.id;

	models.Burger.findOne({where:{id:condition}})
	.then(function(burger){
		burger.destroy();
	})
	.then(function(newburger){
		res.redirect('/burgers');
	})	
});

module.exports = router;