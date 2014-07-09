"use strict";

//////////////////////////////////////////////////////////
////// TilesView Constructor
////////////////////////////////////////////////////////


var TilesView = Backbone.View.extend({

	className: 'property-box',

	template: _.template($('.tiles-view-template').text()),

	initialize: function() {
		$('.tile-container').append(this.el);
		this.render();
	},

	render: function() {
		this.$el.append(this.template({model: this.model}));
	},

});

var GamePrice = Backbone.View.extend({

	className: 'match-price',

	template: _.template($('.match-price-template').text()),

	initialize: function() {
		$('.price-box').append(this.el);
		this.render();
	},

	render: function() {
		this.$el.append(this.template({model: this.model}));
	},
});

// var renderedTemplate = this.template(this.model.attributes)