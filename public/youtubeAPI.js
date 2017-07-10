$(function(){
  $("form").on("submit", function(e){
    e.preventDefault();
    //prepare the request
    var request = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
      maxResults: 10,
      order: "viewCount"
    });

    //excute the request
    request.execute(function(response){
      var results = response.result;
      $("#results").empty();
      $.each(results.items, function(index, item){
        $("#results").append("<div>" + item.snippet.title + "</div>");
        $("#results").append("<div><iframe width='640'height='360' src='https://www.youtube.com/embed/" + item.id.videoId + "'" +  "frameborder='0' allowfullscreen></iframe></div>");
      })
    })
  });
});


function onJSClientLoad(){
  gapi.client.setApiKey("AIzaSyBvth3Mgsgr1RqWqDdOeZM-Z_tYBTnbCHQ");
  gapi.client.load("youtube", "v3", function(){
    console.log("youtube is ready");
  });
};
