$(document).ready(function(){


  setInterval(
    function(){
      var timeNow = new Date();
      var hours   = timeNow.getHours();
      var minutes = timeNow.getMinutes();
      var seconds = timeNow.getSeconds();
      var color = "#" + hours + minutes + seconds;

      $("#color").text(color)
      $("body").css("background", color)
    }
  , 1000);


});