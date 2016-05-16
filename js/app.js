/*
  Please add all Javascript code to this file.
*/
$(document).ready(function() {
var myImpressionList = $('.impressions');

console.log(myImpressionList[0]);

//myImpressionList[0].innterHTML = "test";

for (var i=0; i < myImpressionList.length; i++) {
	$(myImpressionList[i]).html('test' + i);
}
	
$('#selectSource').on('click', 'li', function(event) {
	//console.log(event);
	var currentFeed = $(this).text();
	$('#currentSource').html(currentFeed);
	displayFeed(currentFeed);
})

});

function displayFeed(myCurrentFeed) {
	//console.log(myCurrentFeed);
	case "Reddit": {
		//Do something here;
		$.ajax{
			url:'',
			datatype: 'json',
			data:{},
			method: 'Get',
			success: function(response) {
				var myRedditObj = response.data.children;
				myRedditObj.forEach(function(item) {
					console.log(item.data.author);
				});
			},
			error: function(response) {
				console.log('There was a problem');
			}
		}
		console.log("I Reddit");
		break;
	}
	case "Mashable": {
		//Do something here;
		console.log("Mashin' some taters!");
		break;
	}
	case "Digg": {
		//DoSomethingHere;
		console.log("Do you Digg it!");
		break;
	}
	default {
		//do your default action here;
		console.log("This is your default action.");
	}
}