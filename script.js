

// THIS IS OUR API
// src="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=c8ohHyKgcudoJnGJM7EqW5oiZeLp2x0z">

// "https://api.nytimes.com/svc/search/v2/articlesearch.json"

function test(){
    console.log("SCRIPT LOADED!");
};

test();



$("#searchBtn").on("click", function(event) {
    event.preventDefault();

    console.log("hello!");
    // var news = $("#searchField").val().trim();

    // console.log(news);

    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + news + "election&api-key=c8ohHyKgcudoJnGJM7EqW5oiZeLp2x0z";


    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //     console.log(response)
    //   })
      
});
