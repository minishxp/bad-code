var toggleState;

document.addEventListener('DOMContentLoaded', function (event) {
  let searchToolbar_isOpen = true;
  const editor = document.querySelector("#__EDITOR-MAIN")
  const searchToolbar = document.querySelector('#files');

  toggleState = function () {
    bool__state = searchToolbar_isOpen;
    if (bool__state) {
      searchToolbar.style.zIndex = '-50';
      editor.style.filter = 'blur(50px);';
    } else {
      searchToolbar.style.zIndex = '50';
      editor.style.filter = 'blur(0px);';
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
