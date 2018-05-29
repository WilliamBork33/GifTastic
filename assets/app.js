//Jquery onclick function.
$("#button").on("click", function() {
  var pokemon = $(this).attr("data-pokemon");
  //The API URL that we are querying. Includes API key. Includes tag for Pokemon.
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y9A9qlemLDiFzYm1Pa27kOUAzznC8Ein&tag=pokemon&limit=10";

  //AJAX method to call the URL.
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    //Promise to retrieve the URL response.
    .then(function(response) {
    //Declaring a variable with the response image URL.
      var imageUrl = response.data.image_original_url;
      //Creates an img tag as an Object.
      var pkmnImage = $("<img>");
      //Applying a value to the source attribute.
      pkmnImage.attr("src", imageUrl);
      pkmnImage.attr("alt", "cat image");
      var results = response.data;
      console.log(results)
      //Sending to the DOM the image.
      $("#gifs-appear-here").prepend(pkmnImage);

    });
});