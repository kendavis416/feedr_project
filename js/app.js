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

function createArticle(title,categories,image1,scores) {
	return('<article class="article">' +
           '<section class="featureImage">' +
              '<img src=' + image1 + ' alt="" />' +
            '</section>' + 
            '<section class="articleContent">' +
                '<a href="#"><h3 id="articleTitle">' + title + '</h3></a>' +
                '<h6 id="feedCategory">' + categories + '</h6>' +
            '</section>' +
            '<section class="impressions">' + scores + '</section>' +
            '<div class="clearfix"></div>' +
          '</article>');
}

function displayFeed(myCurrentFeed) {
	//console.log(myCurrentFeed);
	switch (myCurrentFeed) {
		case "Reddit": 
			//Do something here;
			$.ajax({
				url:'https://www.reddit.com/top.json',
				datatype: 'json',
				data:{},
				method: 'Get',
				success: function(response) {
					var allarticles = "";
					var myRedditObj = response.data.children;
					myRedditObj.forEach(function(item) {
						if (item.data.preview !== undefined) {
							//console.log(item);
							var title = item.data.title;
							var featureImg = item.data.preview.images[0].source.url;
							var categories = item.data.subreddit;
							var scores = item.data.score;
							allarticles+=this.createArticle(title,categories,featureImg,scores);
						}
					});
					$('#main').html(allarticles);
				},
				error: function(response) {
					console.log('There was a problem with the Reddit feed');
				}
			});
			break;
		case "Mashable": 
			//Do something here;
			$.ajax({
				url:'http://www.mashable.com/stories.json',
				datatype: 'json',
				data: {},
				method: 'Get',
				success: function(response) {
					console.log(response);
					var allarticles = "";
					var myMashableObj = response.new;
					myMashableObj.forEach(function(item) {
						console.log(item);
						if (item.feature_image !== undefined) {
							var title = item.title;
							var featureImg = item.feature_image;
							var categories = item.channel_label;
							var scores = item.shares.total;
							allarticles+=this.createArticle(title,categories,featureImg,scores);							
						}
					});
					$('#main').html(allarticles);
					console.log("MASHUP:>>>> ",response);
				},
				error: function(response) {
					console.log('There was a problem mashin them taters!');
				}
			});
			console.log("We are mashin some taters!");
			break;
		case "Digg": 
			//DoSomethingHere;
			console.log("Do you Digg it!");
			break;
		default: 				
			//do your default action here;
			console.log("This is your default action.");
				
	}
}