let editor = null



document.addEventListener("DOMContentLoaded", function() {
  editor = CodeMirror(document.querySelector('#__EDITOR-WRAP'), {
    lineNumbers: true,
    tabSize: 2,
    value: '',
    theme: 'monokai',
    mode: 'javascript',
    smartIndent: true
  });

  editor.on("change", function() {
    localStorage.setItem("__editor_data__", editor.getValue())
  });
})