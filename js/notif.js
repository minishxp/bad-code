var toggleNotif = null
var notifState = false

document.addEventListener('DOMContentLoaded', function (event) {
  toggleNotif = function(text) {
    if (notifState) {
      document.getElementById("main-notif").style.display = 'none'
      document.getElementById("body-wrap").style.filter = 'none'
      notifState = false
    }
    else {
      document.getElementById("main-notif").style.display = 'inline'
      document.getElementById("main-notif-txt").innerHTML = text
      document.getElementById("body-wrap").style.filter = 'blur(5px)'
      document.getElementById("main-notif").style.filter = 'none'
      notifState = true
    }
  }
})