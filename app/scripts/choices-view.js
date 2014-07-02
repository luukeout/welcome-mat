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
		$('.start-box').html('');
		new SelectView()


	},

});

var SelectView = Backbone.View.extend({

	template: _.template($('.select-box-template').text()),

	initialize: function() {
		$('.start-box').append(this.el)
		this.render();
	},

	render: function() {
		this.$el.html(this.template())
	},

});