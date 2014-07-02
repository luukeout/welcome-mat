"use strict";

var TilesView = Backbone.View.extend({

	template: _.template($('.tiles-view-template').text()),

	initialize: function() {
		$('.tile-container').append(this.el)
		this.render();
	},

	render: function() {
		this.$el.html(this.template())
	},

});