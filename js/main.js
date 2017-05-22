var quoteText;
var author;
function getQuote(){
    $.ajax({
    url: "https://api.forismatic.com/api/1.0/",
    jsonp:'jsonp',
    data:{
      method: 'getQuote',
      lang: 'en',
      format: 'jsonp'
    },
    dataType:'jsonp',
    method:'GET',
    success:function(data){
       quoteText = data.quoteText;
       author = data.quoteAuthor;
       $('.white-text').text(quoteText);
       if(author){
         $("#author").text("--"+author);
       }else{
         $("#author").text("-- Unknown");
       }
    },
    error:function(err){
      alert(err);
      console.log(err);
    }
  });
}  
$(document).ready(function(){
  getQuote();
  $("#newQuote").on('click', function(e){
  getQuote();
});
  $("#tweet").on('click', function(){
     window.open('https://twitter.com/intent/tweet?text='+quoteText); 
  });
  });