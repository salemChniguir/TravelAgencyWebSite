window.onload = function () {
  document.getElementById('club-meninx').style.backgroundImage = 'url(../hotels/club-meninx-3e/1.jpg)';
  var rndImagesClubMeninx = [
    'url(../hotels/club-meninx-3e/1.jpg)',
    'url(../hotels/club-meninx-3e/2.jpg)',
    'url(../hotels/club-meninx-3e/3.jpg)',
    'url(../hotels/club-meninx-3e/4.jpg)',
    'url(../hotels/club-meninx-3e/5.jpg)',
    'url(../hotels/club-meninx-3e/6.jpg)'
  ]

  setInterval(function () {
    var i = Math.floor(Math.random() * rndImagesClubMeninx.length);
    document.getElementById('club-meninx').style.backgroundImage =  rndImagesClubMeninx[i];
  }, 3000) 


  document.getElementById('holiday-beach-4e').style.backgroundImage = 'url(../hotels/holiday-beach-4e/1.jpg)';
  var rndImagesHolidayBeach = [
    'url(../hotels/holiday-beach-4e/1.jpg)',
    'url(../hotels/holiday-beach-4e/2.jpg)',
    'url(../hotels/holiday-beach-4e/3.jpg)',
    'url(../hotels/holiday-beach-4e/4.jpg)',
    'url(../hotels/holiday-beach-4e/5.jpg)',
    'url(../hotels/holiday-beach-4e/6.jpg)'
  ]

  setInterval(function () {
    var i = Math.floor(Math.random() * rndImagesHolidayBeach.length);
    document.getElementById('holiday-beach-4e').style.backgroundImage =  rndImagesHolidayBeach[i];
  }, 2000) // Change 2000 to 10000.
  document.getElementById('joya-paradise-4e').style.backgroundImage = 'url(../hotels/joya-paradise-4e/1.jpg)';
  var rndImagesJoyaParadise = [
    'url(../hotels/joya-paradise-4e/1.jpg)',
    'url(../hotels/joya-paradise-4e/2.jpg)',
    'url(../hotels/joya-paradise-4e/3.jpg)',
    'url(../hotels/joya-paradise-4e/4.jpg)',
    'url(../hotels/joya-paradise-4e/5.jpg)',
    'url(../hotels/joya-paradise-4e/6.jpg)',
    'url(../hotels/joya-paradise-4e/7.jpg)',
    'url(../hotels/joya-paradise-4e/8.jpg)'
  ]

  setInterval(function () {
    var i = Math.floor(Math.random() * rndImagesJoyaParadise.length);
    document.getElementById('joya-paradise-4e').style.backgroundImage =  rndImagesJoyaParadise[i];
  }, 4000) // Change 2000 to 10000.


  
}
