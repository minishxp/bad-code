var __globalData = '';
var textEditor = document.querySelector('#__EDITOR-MAIN');

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


var children = document.getElementById('files').getElementsByTagName('*');

for( var i = 0; i<children.length; i++){
  console.log(window.location)
    children[i].onclick = function() {
      textEditor.value = httpGet(window.location + "/staticStorage/" + children[i].innerHTML)
      console.log('fired')
    }
}