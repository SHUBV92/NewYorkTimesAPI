var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=brexit&api-key=a6iC3CGzLA3PsGXMXTPwszYM20sOKDwR'

function NewYork() {

}
function setup() {
  noCanvas(); 
  loadJSON(url, gotData);
}

function gotData(data) {

     var articles = data.response.docs
  
     for (var i = 0; i < articles.length; i++) {
      createElement('h1', articles[i].headline.main)
      createP(articles[i].snippet)
      createP(articles[i].lead_paragraph)
      createP(articles[i].web_url)



  }

  // println(data.response.docs[1].headline.main)
}

