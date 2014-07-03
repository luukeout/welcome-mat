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
		$('#price') === '0' ? alert('Please choose a home value') : router.navigate("game", {trigger: true});
			
		
	},

});








