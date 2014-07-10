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
		// Switch start-box to .hide to make slideDown work
		$('.start-box').show();
		// ($('.start-box').is( ":hidden" )) ? $('.start-box').slideDown(1000) : $('.start-box').hide();
	},

	priceScreen: function() {
		$('.game-header').hide();
		$('.tile-container').hide();
		$('.start-box').html('');
		new SelectView();
		$('.start-box').show();
	},

	gameScreen: function() {
		window.housePrices=[]
		window.houseList.forEach(function(property){
			$.when(apiCall(property)).done(($('.game-header, .tile-container').is( ":hidden" )) ? $('.game-header, .tile-container').slideDown('slow') : $('.game-header, .tile-container').hide())
		})

		$('.start-box').hide();
		$('.tile-container').html('');
	},
});





var router = new AppRouter();
Backbone.history.start();