

let readFile;
let saveToLocalFile;
function download(data, filename, type) {
  var file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}

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
      reader.fileName = file.name
      reader.readAsText(file, 'UTF-8');
      reader.onload = (readerEvent) => {
        var content = readerEvent.target.result;
        
        editor.setValue(content);
        localStorage.setItem("__editor_data__", content)
        editTitle(readerEvent.target.fileName)
      };
    };

    input.click();
  };

  saveToLocalFile = function() {
    let title = document.getElementById("sidebar-status-txt").innerHTML
    download(editor.getValue(), title, "txt")
  }
});