


// 'http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1b5m7iasgln_90hcq&address=105+Devonshire+Ln&citystatezip=Greenville%2C+SC'

// 105 Devonshire Ln, Greenville, SC


//////////////////////////////////////////////////////////
////// House ID Arrays
////////////////////////////////////////////////////////
var oneHundred  = [11085227, 80963476, 11072468, 11014125, 82540495, 11022580, 11079201];

var oneFifty    = [11085315, 2128039685, 11002304, 10990739, 11050615, 11002769];

var twoHundred  = [89804034, 96458822, 71251078, 11025731, 11014874, 11001058, 11049647, 11045041, 114444926, 10991859, 11011984, 63663043, 11078620, 11002172, 11055387];

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
		console.log(houseList)
	}

	router.navigate("game", {trigger: true})
}



//////////////////////////////////////////////////////////
////// Parse XML Function
////////////////////////////////////////////////////////
function parseXml(xml){
  var zpid      = $(xml).find("zpid").text()
  var pic       = $(xml).find("url").first().text() 
  var price     = $(xml).find("price").text()
  var bedrooms  = $(xml).find("bedrooms").text()
  var bathrooms = $(xml).find("bathrooms").text()
  var sqft      = $(xml).find("finishedSqFt").text()
  var lotSize   = $(xml).find("lotSizeSqFt").text()

  // Add Commas to Numbers
  var price   = numeral(price).format('0,0')
  var sqft    = numeral(sqft).format('0,0')
  var lotSize = numeral(lotSize).format('0,0')

//   bedrooms = Number_of_bedrooms_returned_from_api;
// var imgOutput = [];
// for(var ii=num;num>0;num--){ 
//   imageOutput = imageOutput + 1;
// } 
// return imageOutput;
  var imgSource = 'http://s14.postimg.org/i8n30zta5/bed_darker.png'

  // Add API Data To A Collection As An Object
  var home = properties.add({
  	zpid:      zpid,
  	pic:       pic, 
  	price:     price, 
  	bedrooms:  bedrooms, 
  	bathrooms: bathrooms,
  	sqft:      sqft,
  	lotSize:   lotSize,
  });
  var imageOutput = []
  function convert(num){
  	for(var ii=num; num>0; num--){ 
	  imageOutput.push(num)
	} 
  }

//   convert(bedrooms)
// console.log(imageOutput)
//   function beds(){
//   	imageOutput.map(function(''){
//   		num = ''
  		
  	
  	
//   	})
//   }
  
  var bedrooms = beds(imgSource)
console.log(bedrooms)

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






