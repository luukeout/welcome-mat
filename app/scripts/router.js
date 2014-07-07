"use strict";

var AppRouter = Backbone.Router.extend({

	routes: {
		""      : "startScreen",
		"price" : "priceScreen",
		"game"  : "gameScreen",
	},

	startScreen: function() {
		$('.game-header').hide();
		$('.tile-container').hide();
		$('.start-box').html('');
		new StartView();
		$('.start-box').show();
	},

	priceScreen: function() {
		$('.game-header').hide();
		$('.tile-container').hide();
		$('.start-box').html('');
		new SelectView();
		$('.start-box').show();
	},

	gameScreen: function() {
		// 	window.houseList.forEach(function(property){
		// 	apiCall(property)
		// })
		$('.start-box').hide();
		$('.tile-container').html('');
		new TilesView();
		$('.game-header').show();
		$('.tile-container').show();
	},


});



var router = new AppRouter();
Backbone.history.start();