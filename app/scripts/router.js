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
		window.houseList.forEach(function(property){
			apiCall(property)
		})
		$('.start-box').hide();
		$('.tile-container').html('');
		// new TilesView();
		// $('.game-header').show();
		($('.game-header').is( ":hidden" )) ? $('.game-header').slideDown("slow") : $('.game-header').hide();
		($('.tile-container').is( ":hidden" )) ? $('.tile-container').slideDown("slow") : $('.tile-container').hide();
		// $('.tile-container').show();
	},


});

// $( document.body ).click(function () {
//   if ( $( "div:first" ).is( ":hidden" ) ) {
//     $( "div" ).slideDown( "slow" );
//   } else {
//     $( "div" ).hide();
//   }
// });

// ($('.game-header').is( ":hidden" )) ? $('.game-header').slideDown("slow") : $('.game-header').hide();



var router = new AppRouter();
Backbone.history.start();