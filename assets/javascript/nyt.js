$(function () {

  $("#searchButton").on("click", function (event) {
    event.preventDefault();

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //set vars
    var searchTerms = $('#searchTerms').val();
    var listAmount = $('#listAmount').val();
    var startYear  = $('#startYear').val();
    var endYear = $('#endYear').val();
    console.log("Search Terms: "+ searchTerms);
    console.log("List Amount: " + listAmount);
    console.log("Start Year: " + startYear);
    console.log(" End Year: "+ endYear);
    
    
    var startYear  = startYear + "0101";
    var endYear = endYear + "1231";
    
    console.log(startYear);
    console.log(endYear);
    
    var pageResults = Math.ceil(listAmount / 10);
    
    //Set
    
    url += '?' + $.param({
      'api-key': "582e6371a2b04467afd0ea36e7dd1e35",
      'q': searchTerms,
      'begin_date': startYear,
      'end_date': endYear,
      'page': pageResults
    
    });
    console.log(url);
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });
    
     

  }); //end on-click button 


}); //end document ready function