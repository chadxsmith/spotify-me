// API Docs at:
// https://developer.spotify.com/technologies/web-api/search/
$(document).ready(function(){

var keyword;

function searchTerm(){
  event.preventDefault();
  $("#results").empty();

  keyword = $('#search-keyword').val();
  var url = "http://ws.spotify.com/search/1/artist.json?q="+keyword
  return $.ajax({
    url: url,
    type: "get",
    dataType: "json"

  }).done(function(response){

    $('#search-type').each(function(){

      if (this.value == 'artist') {
        console.log("you are looking for an artist")
      }
    for (i = 0; i < response["artists"].length;i++) {
        $('#results').append("<li><a href='"+ response["artists"][i]["href"] + "'>" + response["artists"][i]["name"] + "</a></li>")
    }

    else{
      for (i = 0; i < response["artists"].length;i++) {
          $('#results').append("<li><a href='"+ response["track"][i]["href"] + "'>" + response["track"][i]["name"] + "</a></li>")
      }

    }
  })
}


$( "#submit-button" ).click(searchTerm);



}); //end of document ready





// function Stock(symbol) {
//   for (var i = 0; i < data.length; i++) {
//     if (data[i]["Symbol"] == symbol) {
//       this.price = data[i]['LastPrice'];
//       this.name = data[i]['Name'];
//       this.numShares = 0;
//       this.totalValue = this.price * this.numShares;
//     }
//     else {
//       console.log("i don't see anything")
//     }
//   }
// }
//
//
//
// // your code to search the API and return a Stock object here
// $.ajax({ url:("http://dev.markitondemand.com/api/v2/quote/jsonp?symbol="+symbol),
//       method: "get",
//       dataType: "jsonp",
//       context: StockInstance  //this create the context for Stock
//   }).done(function(response){
//     StockInstance.companyName = response["Name"];
//     StockInstance.price = response["LastPrice"];
//
//     stockView.render();
// });







// var Animal = function Animal (name) {
//   var _name = name;
//   this.getName = function getName () {
//     return _name;
//   }
// }
//
// var cat = new Animal("Felix");
// cat.getName(); //=> "Felix"










//
//   var symbol = null;
//   var stockView = new StockView(symbol);
//
//
//
// function searchByArtist() {
//   var url = 'http://ws.spotify.com/search/1/artist.json?q='+keyword;
// }
//
// console.log(searchByArtist())
//
// function searchByTrack(keyword) {
//   var url = 'http://ws.spotify.com/search/1/track.json?q='+keyword;
// }
//
//
//
// var url = "http://ws.spotify.com/search/1/artist.json?q=drake"
// $.ajax({
//   url: url,
//   type: "get",
//   dataType: "json"
// }).done(function(){
//   console.log("ajax request success!")
// }).fail(function(){
//   console.log("ajax request fails!")
// }).always(function(){
//   console.log("this always happens regardless of successful ajax request or not")
// })
//
//
// function Stock(symbol) {
//   for (var i = 0; i < data.length; i++) {
//     if (data[i]["Symbol"] == symbol) {
//       this.price = data[i]['LastPrice'];
//       this.name = data[i]['Name'];
//       this.numShares = 0;
//       this.totalValue = this.price * this.numShares;
//     }
//     else {
//       console.log("i don't see anything")
//     }
//   }
// }
//
//
//
//
//
//
// $.ajax({url:
// "http://dev.markitondemand.com/api/v2/quote/json?symbol=aapl",
// type:"get"}).done(function(data){
//      for (i = 0; i < data.length; i++) {
//  console.log(data[i].description)
//  }
// });
//
//
//
// $.ajax({url:
// "http://ws.spotify.com/search/1/artist.json?q=drake",
// type:"get"}).done(function(response){
//   console.log(response)
//   }
// })
