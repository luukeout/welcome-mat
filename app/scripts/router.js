"use strict";

var AppRouter = Backbone.Router.extend({

	routes: {
		""      : "startScreen",
		"price" : "priceScreen",
		"game"  : "gameScreen",
	},



	startScreen: function() {
		$('.start-box').html('');
		new StartView();

	},


});

var router = new AppRouter();
Backbone.history.start();