let readFile;

document.addEventListener('DOMContentLoaded', function () {
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
      };
    };

    input.click();
  };
});
