"use strict";

//////////////////////////////////////////////////////////
////// TilesView Constructor
////////////////////////////////////////////////////////
var TilesView = Backbone.View.extend({

	className: 'property-box',

	template: _.template($('.tiles-view-template').text()),

	events: {
		"click": "matching",
	},

	initialize: function() {
		$('.tile-container').append(this.el);
		this.render();
		$('.home-price').hide()
	},

	render: function() {
		this.$el.append(this.template({model: this.model}));
	},

	matching: function() {
		if (this.model == randomHome.attributes) {
			this.$el.css('background', 'rgb(26, 248, 150)')
			$('.home-price').show()
			// console.log(this.model)
			}
			else 
				if (this.model !== randomHome.attributes) {
					this.$el.css('background', 'rgb(250, 15, 81)')
					// $('.home-price').html('')
					this.$('.home-price').replaceWith('Nope. Try Again.')
				}

				else
					if (this.model == randomHome.attributes) {
					this.$el.css('background', 'rgb(26, 248, 150)')
					// $('.home-price').html('')
					$('.home-price').replaceWith($('.home-price').show())
				}

	},

});

//////////////////////////////////////////////////////////
////// GamePrice Constructor
////////////////////////////////////////////////////////
var GamePrice = Backbone.View.extend({

	className: 'match-price',

	template: _.template($('.match-price-template').text()),

	initialize: function() {
		$('.price-box').append(this.el);
		this.render();
	},

	render: function() {
		// console.log(this.model)
		this.$el.html(this.template(this.model.attributes));
	},
});

// var renderedTemplate = this.template(this.model.attributes)