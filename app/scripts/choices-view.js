'use strict';

////////////////////////////////////////////////////////
///// StartView Constructor
///////////////////////////////////////////////////////
var StartView = Backbone.View.extend({

	template: _.template($(".start-box-template").text()),

	events: {
		"click .button" : "changeView",
	},

	initialize: function() {
		$('.start-box').append(this.el);
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
	},

	changeView: function(){
		
		router.navigate('price', {trigger: true});
	},

});

//////////////////////////////////////////////////////////
///// SelectView Constructor
/////////////////////////////////////////////////////////
var SelectView = Backbone.View.extend({

	template: _.template($('.select-box-template').text()),

	events: {
		"click .button" : "getArray",
	},

	initialize: function() {
		$('.start-box').append(this.el);
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
	},

	getArray: function(){  
		if ($('.one-hun').val() === '100') {
					window.shuffledList = _.shuffle(oneHundred)
						getHouse(oneHundred)
				} else 
					 if ($('.one-fif').val() === '150') {
						window.shuffledList = _.shuffle(oneFifty)
							getHouse(oneFifty)
					} else 
						 if ($('.two-hun').val() === '200') {
							window.shuffledList = _.shuffle(twoHundred)
								getHouse(twoHundred)
					}
				 	
	},
});








