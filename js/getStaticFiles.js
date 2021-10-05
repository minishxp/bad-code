document.onload = function () {
  console.log('loaded')
  var __globalData = '';
  var textEditor = document.querySelector('#__EDITOR-MAIN');

  function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  var fileBtns = document.getElementsByClassName('fl-btn');
  fileBtns.forEach(function (node) {
    node.onclick = function () {
      textEditor.value = httpGet(
        document.location + '/staticStorage/' + node.innerHTML
      );
    };

    console.log(node);
  });
};
