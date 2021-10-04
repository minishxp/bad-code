var __globalData = '';

function GetFileSrc(filename) {
  fetch(window.location + '/staticStorage/' + filename).then((response) => {
    return response;
  });
}

document.addEventListener('DOMContentLoaded', function (event) {
  var fileBtns = document.querySelector('#files');
  var textEditor = document.querySelector('#__EDITOR-MAIN');

  $('#files')
    .children('input')
    .each(function () {
      console.log(this.innerHTML);
      this.onclick = function () {
        textEditor.innerHTML = GetFileSrc(this.innerHTML);
      };
    });
});
