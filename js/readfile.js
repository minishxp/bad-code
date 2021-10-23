let readFile

document.addEventListener('DOMContentLoaded', function() {
  readFile = function() {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => { 

      // getting a hold of the file reference
      var file = e.target.files[0]; 

      // setting up the reader
      var reader = new FileReader();
      reader.readAsText(file,'UTF-8');

      // here we tell the reader what to do when it's done reading...
      reader.onload = readerEvent => {
          var content = readerEvent.target.result; // this is the content!
          console.log( content );
      }

    }

    input.click();
  }
})