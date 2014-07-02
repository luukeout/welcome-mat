"use strict";

var StartView = Backbone.View.extend({

	template: _.template($(".start-box-template").text()),

	events: {
		"click .start-button" : "changeView",
	},

	initialize: function() {
		$('.start-box').append(this.el)
		this.render();
	},

	render: function() {
		this.$el.html(this.template())
	},

	changeView: function(){
		
		router.navigate("price", {trigger: true});
	},

});

var SelectView = Backbone.View.extend({

	template: _.template($('.select-box-template').text()),

	events: {
		"click .styled-select" : "changeView",
	},

	initialize: function() {
		$('.start-box').append(this.el)
		this.render();
	},

	render: function() {
		this.$el.html(this.template())
	},

	changeView: function(){
		
		router.navigate("game", {trigger: true});
	},

});








