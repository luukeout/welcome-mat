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

	getArray: function(evt){

		if (evt.currentTarget.id === "one-hun") {
				window.shuffledList = _.shuffle(oneHundred)
				getHouse(oneHundred)
			} else if (evt.currentTarget.id === "one-fif") {
						window.shuffledList = _.shuffle(oneFifty)
						getHouse(oneFifty)
					} else {
							window.shuffledList = _.shuffle(twoHundred)
							getHouse(twoHundred)
						}
	},
});
						
				  

