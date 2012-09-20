$(function(){
  $("#createmovie").submit(function(e){
    e.preventDefault();
    
    $.ajax({
      url: "/movies",
      type: "POST",
      data: JSON.stringify({
        name: $(".name").val(),
        synopsis: $(".synopsis").val()
      }),
      contentType: "application/json",
      success: function(movie){
        $("<li><a href='/movies/{id}'>{name}</a></li>".supplant(movie))
          .appendTo($("#movielist"));
      }
    });
  });
});