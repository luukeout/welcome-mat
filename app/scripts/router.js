"use strict";

var AppRouter = Backbone.Router.extend({

	routes: {
		""      : "startScreen",
		"price" : "priceScreen",
		"game"  : "gameScreen",
	},

	startScreen: function() {
		$('.tile-container').hide();
		$('.start-box').html('');
		new StartView();
		$('.start-box').show();
	},

	priceScreen: function() {
		$('.tile-container').hide();
		$('.start-box').html('');
		new SelectView();
		$('.start-box').show();
	},

	gameScreen: function() {
		// I think I do the API calls here using the houseList array from my select view
		$('.start-box').hide();
		$('.tile-container').html('');
		new TilesView();
		$('.tile-container').show();
	},


});



var router = new AppRouter();
Backbone.history.start();