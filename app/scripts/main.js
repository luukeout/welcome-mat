

// Use This For Retrieving ZPID'S
// 'http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1b5m7iasgln_90hcq&address=307+Mcdonald+St&citystatezip=Greenville%2C+SC'

// 307 Mcdonald St, Greenville, SC  


//////////////////////////////////////////////////////////
////// House ID Arrays
////////////////////////////////////////////////////////
var oneHundred  = [11072468, 11022580, 11079201, 11050639, 10992630, 80959177];

var oneFifty    = [11085315, 2128039685, 11002304, 67591730, 11047979, 80955319]; 

var twoHundred  = [96458822, 71251078, 11001058, 114444926, 10991859, 63663043, 11078620, 11002172, 11055387, 11049386];

// Instantiate New Collection
var properties = new PropertiesCollection();
var randomHome;

// Get A Random Property And Instantiate GamePrice View
properties.on('add', function(){
	if (properties.length === 3) {
		randomHome = _.sample(properties.models);
  		new GamePrice({model: randomHome})
	}
})

// HouseList Ready To Be Filled
var houseList = [];

//////////////////////////////////////////////////////////
////// Get House Function
////////////////////////////////////////////////////////
function getHouse (arrayName) {
	if (shuffledList.length<=2) {
		shuffledList = _.shuffle(arrayName);
	}

	for (var i=0; i < 3; i++) {
		houseList[i] = shuffledList.pop()
		//Use this console log to find houses that have gone off market
		console.log(houseList)
	}

	router.navigate("game", {trigger: true})
}

//////////////////////////////////////////////////////////
////// Parse XML Function
////////////////////////////////////////////////////////
function parseXml(xml){
  var zpid          = $(xml).find("zpid").text()
  var pic           = $(xml).find("url").first().text() 
  var price         = $(xml).find("price").text()
  var bedrooms      = $(xml).find("bedrooms").text()
  var bathrooms     = $(xml).find("bathrooms").text()
  var sqft          = $(xml).find("finishedSqFt").text()
  var lotSize       = $(xml).find("lotSizeSqFt").text()
  var street	    = $(xml).find("street").text()
  var city          = $(xml).find("city").text()
  var state         = $(xml).find("state").text()
  var homeDetails   = $(xml).find("homeDetails").text()

  // Add Commas to Numbers
  var price   = numeral(price).format('0,0')
  var sqft    = numeral(sqft).format('0,0')
  var lotSize = numeral(lotSize).format('0,0')

  // Add API Data To A Collection As An Object
  var home = properties.add({
  	zpid:          zpid,
  	pic:           pic, 
  	price:         price, 
  	bedrooms:      bedrooms, 
  	bathrooms:     bathrooms,
  	sqft:          sqft,
  	lotSize:       lotSize,
  	street:        street,
  	city:          city,
  	state:         state,
  	homeDetails:   homeDetails,
  });

  // Push Prices Into An Empty Array
  window.housePrices.push(home.attributes.price)
  	// console.log(housePrices)

  // Instantiate New TilesView
  var view  = new TilesView({model: home.attributes})
}

//////////////////////////////////////////////////////////
////// API Call
////////////////////////////////////////////////////////
function apiCall(zpid) {
	$.ajax({
    type: "GET",
    url: "http://0.0.0.0:3000/api/property/" + zpid,
    dataType: "xml",
    success: parseXml
	})
}


