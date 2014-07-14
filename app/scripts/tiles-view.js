"use strict";

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

//////////////////////////////////////////////////////////
////// TilesView Constructor
////////////////////////////////////////////////////////
var TilesView = Backbone.View.extend({

	className: 'property-box',

	template: _.template($('.tiles-view-template').text()),
	// bedTemplate: _.template($('.bed-Template').text()),

	events: {
		"click": "matching",
	},

	initialize: function() {
		$('.tile-container').append(this.el);
		this.render();
		$('.got-it').hide()
		$('.home-price').hide()
		$('.play-again').hide()
		$('.sorry').hide()
	},

	render: function() {
		this.$el.append(this.template({model: this.model}));
	},

	matching: function() {
		if (this.model == randomHome.attributes) {
			this.$el.css('background', 'rgb(17, 177, 107)')
			$('.home-price').slideUp()
			$('.home-price').show('slow')
			this.$('.got-it').slideDown('slow').show()
			this.$('.play-again').show()
			$('.play-again').click(function(){
				router.navigate("price", {trigger: true})
				location.reload()
				})
			}
			
			else 
				if (this.model !== randomHome.attributes) {
					this.$el.css('background', 'rgb(250, 15, 81)')
					this.$('.home-price').hide()
					this.$('.sorry').show()
					this.$('.play-again').hide()
				}
	},
});

//////////////////////////////////////////////////////////
////// BedView Constructor
////////////////////////////////////////////////////////
// var Bed = Backbone.View.extend({

// 	className: 'bed',

// 	template: _.template($('.bed-view-template').text()),

// 	initialize: function() {
// 		$('.bed-box').append(this.el);
// 		this.render();
// 	},

// 	render: function() {
// 		// console.log(this.model)
// 		this.$el.html(this.template(this.model.attributes));
// 	},
// });


// var renderedTemplate = this.template(this.model.attributes)