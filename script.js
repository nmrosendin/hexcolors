$(document).ready(function(){
    function showTime(){
  // Your code goes here
  // 1. Get the current time every second (24 hour time)
        var currentTime= new Date ();
        var currentHours= currentTime.getHours ();
        var currentMinutes= currentTime.getMinutes ();
        var currentSeconds= currentTime.getSeconds ();

        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
        currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
      
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
        var color= "#" + currentHours + currentMinutes + currentSeconds;;
        $("#color").html(currentTimeString);
        $("body").css("background-color",color);
        $('#color').text(color);
    }

    setInterval(showTime, 1000);
  // 2. Change the background color of the page to that color
    
     // 3. Change the text of the h1 to that color

  // HINTS: setInterval, date(),

});