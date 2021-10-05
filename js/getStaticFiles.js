document.addEventListener('DOMContentLoaded', function (event) {
  console.log('loaded')
  var __globalData = '';
  var textEditor = document.querySelector('#__EDITOR-MAIN');

  function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.response;
  }

  var fileBtns = document.getElementsByClassName('fl-btn');
  fileBtns.length

  for (let item of fileBtns) {
    item.onclick = function() {
      textEditor.value = httpGet(window.location + "staticStorage/" + item.innerHTML)
      console.log('click recieved for ' + window.location + "staticStorage/" + item.innerHTML)
    }
  }
});
