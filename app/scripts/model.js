"use strict";

// Model Constructor
var Properties = Backbone.Model.extend({
	defaults: {
		zpid:  "",
		image: "url",
		price: "",
		beds:  "",
		baths: "",
		sqft:  "",
	}

});


// Collection Constructor
var PropertiesCollection = Backbone.Collection.extend({

	model: Properties,
	url: 'http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=X1-ZWz1b5m7iasgln_90hcq&zpid='
});