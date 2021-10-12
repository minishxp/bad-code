const server = 'https://XCodeStaticFileServer.0509798916.repl.co';
let currentFile = null;

function httpGet(theUrl) {
  var e = ""

  fetch(theUrl)
    .then((data) => {
      console.log(data);
    })
    .then((post) => {
      e = post
      console.log(post)
    });

    return e
}

console.log('[Script/GetStaticFiles] Loading static file functions...');
function write(file, content) {
  return httpGet(
    server +
      '/api/write?key=69xdreal&file=' +
      escape(file) +
      '&newContent=' +
      escape(content)
  );
}

function read(file) {
  return httpGet(server + '/api/access/files/' + escape(file));
}

function remove(file) {
  return httpGet(server + '/api/remove?key=69xdreal&file=' + escape(file));
}

function add(file) {
  return httpGet(server + '/api/add?key=69xdreal&file=' + escape(file));
}
console.log('[Script/GetStaticFiles] Loaded!');

document.addEventListener('DOMContentLoaded', function (event) {
  const editor = document.getElementById('__EDITOR-MAIN');

  var buttons = document.getElementsByClassName('fl-btn');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      currentFile = buttons[i].innerHTML;
      editor.value = read(buttons[i].innerHTML);
    };
  }
});
