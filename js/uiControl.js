var toggleState;
var toggleState2;

document.addEventListener('DOMContentLoaded', function (event) {
  let searchToolbar_isOpen = true;
  let settingsToolbar_isOpen = false;
  const editor = document.querySelector("#__EDITOR-WRAP")
  const settings = document.querySelector("#settings-wrap-x1")
  const searchToolbar = document.querySelector('#files');

  toggleState = function () {
    bool__state = searchToolbar_isOpen;
    if (bool__state) {
      searchToolbar.style.display = 'none'
      editor.style.filter = 'blur(0px)';
    } else {
      searchToolbar.style.display = 'inline-block'
      editor.style.filter = 'blur(5px)';
    }

    if (bool__state == true) {
      bool__state = false;
      searchToolbar_isOpen = false;
    } else {
      bool__state = true;
      searchToolbar_isOpen = true;
    }
  };

  toggleState2 = function() {
    if (searchToolbar_isOpen) {
      if (settingsToolbar_isOpen) {
        editor.style.filter = 'none';
        settingsToolbar_isOpen = false
        settings.style.display = 'none'
      }
      else {
        editor.style.filter = 'blur(5px)';
        settingsToolbar_isOpen = true
        searchToolbar_isOpen = false
        settings.style.display = 'inline-block'
        searchToolbar.style.display = 'none'
      }
    }
    else {
      if (settingsToolbar_isOpen) {
        editor.style.filter = 'none';
        settingsToolbar_isOpen = false
        settings.style.display = 'none'
      }
      else {
        editor.style.filter = 'blur(5px)';
        settingsToolbar_isOpen = true
        settings.style.display = 'inline-block'
      }
    }
  }
});
