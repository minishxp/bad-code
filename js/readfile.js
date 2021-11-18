let readFile;

document.addEventListener('DOMContentLoaded', function () {
  // I know this is mostly for readfile BUT

  let check = function() {
    setTimeout(function () {
      if (editor === null)
        check();
      else {
        if (localStorage.getItem("__editor_data__") != undefined) {
          editor.setValue(localStorage.getItem("__editor_data__"))
        }

        if (localStorage.getItem("__editor_name__" != undefined)) {
          
        }
      }
    }, 500);
  };
  check();

  readFile = function () {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = (e) => {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = (readerEvent) => {
        var content = readerEvent.target.result;
        editor.setValue(content);
        localStorage.setItem("__editor_data__", content)
      };
    };

    input.click();
  };
});