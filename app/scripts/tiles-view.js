"use strict";

//////////////////////////////////////////////////////////
////// GamePrice Constructor
////////////////////////////////////////////////////////
var GamePrice = Backbone.View.extend({

	className: 'match-price',

	template: _.template($('.match-price-template').text()),

	initialize: function() {
		$('.price-box').html(this.el);
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
		var bedrooms = this.model.bedrooms
		this.beds(bedrooms)
		var bathrooms = this.model.bathrooms
		this.baths(bathrooms)
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
				// location.reload()
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

	beds: function(bedrooms){
		var data = [];
		var length = bedrooms; 

		for(var i = 0; i < length; i++) {
		    data.push('number');
		}
		// console.log(data)
		// console.log(this.$el)
		var that = this
		data.forEach(function(cool){
			// console.log(that.$el)
			that.$('.bed-box').append('<img src="bed-darker.png">')
		})		
	},

	baths: function(bathrooms){
		var bathArray = [];

		if (bathrooms % 1 == 0) {
			for (var i = 0; i < bathrooms; i++) {
				bathArray.push('number');
				}

				// console.log(bathArray)
				var that = this
				bathArray.forEach(function(){
				that.$('.bath-box').append('<img src="bath-two.png">')
				})
		} else {
				for (var i = 1; i < bathrooms; i++) {
				bathArray.push('number');
				}

				// console.log(bathArray)
				var that = this
				bathArray.forEach(function(){
				that.$('.bath-box').append('<img src="bath-two.png">')
				})
				that.$('.bath-box').append('<img src="bath-two-half.png">')
			}
	},
});

