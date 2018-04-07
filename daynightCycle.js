/*
MADE BY LYRO [https://lyro.fr]

DAY NIGHT CIRCLE is a script which modify your background color based on the
time of the day.

This script apply those changes to the body tag by default, but you can change
it in the configuration area.

See the README for more informations

*/

/* ----------------------------| CONFIGURATION |------------------------------*/

var div = "body";
var mode = "gradient";

/* -----------------------------| FUNCTIONS |---------------------------------*/

function changeBackground(mode, time = new Date($.now()))
{
  switch(mode)
  {
    case "gradient":
      var hour = time.getHours();
      // Sunrise
      if (hour > 6 && hour < 9)
      {
        var str1 = "#3B4371";
        var str2 = "-webkit-linear-gradient(to top, #F3904F, #3B4371)";
        var str3 = "linear-gradient(to top, #F3904F, #3B4371)";
        $( document ).ready(function() {
          $(div).attr('style', 'background:'+ str1 +';background-image:' + str2 + ';background:' + str3);
        });
      }
      // Daylight
      if (hour >= 9 && hour <= 17)
      {
        var str1 = "#005AA7";
        var str2 = "-webkit-linear-gradient(to top, #36D1DC, #005AA7)";
        var str3 = "linear-gradient(to top, #36D1DC, #005AA7)";
        $( document ).ready(function() {
          $(div).attr('style', 'background:'+ str1 +';background-image:' + str2 + ';background:' + str3);
        });
      }
      // Sunset
      if (hour > 17 && hour <= 20)
      {
        var str1 = "#0B486B";
        var str2 = "-webkit-linear-gradient(to top, #F56217, #0B486B)";
        var str3 = "linear-gradient(to top, #F56217, #0B486B)";
        $( document ).ready(function() {
          $(div).attr('style', 'background:'+ str1 +';background-image:' + str2 + ';background:' + str3);
        });
      }
      // Nightlight
      if (hour <= 6 || hour > 20)
      {
        var str1 = "#0f0c29";
        var str2 = "-webkit-linear-gradient(to top, #24243e, #302b63, #0f0c29)";
        var str3 = "linear-gradient(to top, #24243e, #302b63, #0f0c29)";
        $( document ).ready(function() {
          $(div).attr('style', 'background:'+ str1 +';background-image:' + str2 + ';background:' + str3);
        });
      }
      break;

    default:
      break;
  }
}


/* -----------------------------| MAIN CODE |-------------------------------- */

changeBackground(mode);
