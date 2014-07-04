// // 'http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1b5m7iasgln_90hcq&address=705+Pineapple+Pointe&citystatezip=Greenville%2C+SC'

// // 705 Pineapple Pointe, Greenville, SC




// // var firstPart = 'http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1b5m7iasgln_90hcq&address=';
// // var lastPart = '&citystatezip=TravelersRest%2C+SC'


// // 'http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=X1-ZWz1b5m7iasgln_90hcq&zpid=11028791'

// // window.houses = ['asdw123', '12sd', '1231d', 'adsds', '242535']

var oneHundred = [11085227, 80963476, 11072468, 11014125, 82540495, 11022580, 11079201];

var oneFifty    = [11085315, 2128039685, 11002304, 10990739, 11050615, 2146541987];

var twoHundred  = [89804034, 96458822, 71251078, 11025731, 11014874, 11001058, 11049647, 11045041, 114444926, 10991859, 11011984, 63663043, 11078620];


// var a = ["Russell", "Ted", "Caroline", "Egbert", "Simon", "Clyde", "Roger", "Clare", "Elizabeth", "Bobbie"]

// shuffledList = _.shuffle('')
var houseList = [];

function getHouse (arrayName) {
	if (shuffledList.length<=2) {
		// console.log("repopulating")
		shuffledList = _.shuffle(arrayName);
	}

	for (var i=0; i < 3; i++) {
		houseList[i] = shuffledList.pop()
		console.log(houseList)
	}
}




