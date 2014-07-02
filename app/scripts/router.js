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
	},

	priceScreen: function() {
		$('.start-box').html('');
		new SelectView();
	},

	gameScreen: function() {
		$('.start-box').hide();
		$('.tile-container').html('');
		new TilesView();
		$('.tile-container').show();
	},


});

var router = new AppRouter();
Backbone.history.start();