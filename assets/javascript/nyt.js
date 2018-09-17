$(function () {

  $("#searchButton").on("click", function (event) {
    event.preventDefault();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //set vars
    var searchTerms = $('#searchTerms').val().trim();
    var listAmount = $('#listAmount').val();
    var startYear  = $('#startYear').val();
    var endYear = $('#endYear').val();
    // console.log("Search Terms: "+ searchTerms);
    // console.log("List Amount: " + listAmount);
    // console.log("Start Year: " + startYear);
    // console.log(" End Year: "+ endYear);

    // Cache HTML results div
    var results_div = $('#results')
    
    
    var startYear  = startYear += "0101";
    var endYear = endYear += "1231";
    
    // console.log(startYear);
    // console.log(endYear);
    
    var pageResults = Math.ceil(listAmount / 10);
    
    //Set
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "582e6371a2b04467afd0ea36e7dd1e35",
      'q': searchTerms,
      'begin_date': startYear,
      'end_date': endYear,
      'page': 0
    });
    // console.log(searchTerms)
    $.ajax({
      url: url,
      method: 'GET',
    }).then(function (result) {
      
      // Store array object in a variable
      let articles = result.response.docs
      // console.log(result.response)
      console.log(articles);

      // Push results to HTML
      $.each(articles, function (i, article) {
        console.log('article result: ' + article.headline.main)
        results_div.append('<div class="result-div"><h1>' + article.headline.main + '</h1><p>Written by: ' + article.byline.original + '</p><p>Published: ' + article.pub_date + '</p><p>Summary: ' + article.snippet + '</p><a href="' + article.web_url + '">Click for article</a>')
      })


    }).fail(function (err) {
      throw err;
    });


  }); //end on-click button 


}); //end document ready function