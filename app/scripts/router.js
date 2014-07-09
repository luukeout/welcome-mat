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
		// window.matchPrice =[]
		window.housePrices=[]
  		// var matchedPrice = shuffledPrice.pop()
  		// console.log(matchedPrice)

		window.houseList.forEach(function(property){
			apiCall(property)
		})

		// $.each(window.houseList, function(index, value){
		// 	console.log(index, value)
		// 	apiCall(value);
		// })


		$('.start-box').hide();
		$('.tile-container').html('');
		// new GamePrice({model: home.attributes});
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