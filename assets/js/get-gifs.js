//Assign DOM manipulation variables
var btnSearchEl = document.getElementById("#btnSearch");
var gifSectEl = document.querySelector(".gifSect");

// Giphy API key
var APIKEY = "qAY2xUeCahTZp2g4nhu5pjwMQPcOQINZ";
//Event listener to load page
document.addEventListener("DOMContentLoaded", initGifs);
function initGifs() {
  document.getElementById("btnSearch").addEventListener("click", (ev) => {
    ev.preventDefault(); //to stop the page reload

    //Limits search results to the movie category with a limit of 15
    var url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=15&q=categorymovie `;

    var gifStr = document.getElementById("search").value.trim();
    console.log(gifStr);
    url = url.concat(gifStr);
    getMovieGifs(url); //
  });
}
///Fetch request for gif
var getMovieGifs = function (url) {
  gifSectEl.textContent = "";

  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      console.log(content.data[0]);
      //Looping through gifs to display each
      for (var i = 0; i < content.data.length; i++) {
        var video = document.createElement("video");
        //looping property allows gif to loop for 15 seconds
        video.src = content.data[i].images.looping.mp4;

        video.style.height = "200px";
        video.style.width = "200px";
        video.style.padding = "20px";
        //Setting autoplay attribute so gif plays on page load
        video.setAttribute("autoplay", "true");

        console.log(video);

        //Appends gif image to section
        gifSectEl.append(video);
      }
    });
};
