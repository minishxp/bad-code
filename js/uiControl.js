var toggleState;

document.addEventListener('DOMContentLoaded', function (event) {
  let searchToolbar_isOpen = true;
  const editor = document.querySelector("#__EDITOR-WRAP")
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
});
