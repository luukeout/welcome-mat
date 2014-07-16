"use strict";
/////////////////////////////////////////////
///// Model Constructor
///////////////////////////////////////////
var Property = Backbone.Model.extend({
	defaults: {
		zpid        :  "",
		pic         :  "",
		price       :  "",
		bedrooms    :  "",
		bathrooms   :  "",
		sqft        :  "",
		lotSize     :  "",
	},
});

///////////////////////////////////////////////////////
///// Collection Constructor
/////////////////////////////////////////////////////
var PropertiesCollection = Backbone.Collection.extend({

	model: Property,
	url: ''
});