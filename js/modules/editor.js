let editor = null



document.addEventListener("DOMContentLoaded", function() {
  editor = CodeMirror(document.querySelector('#__EDITOR-WRAP'), {
    lineNumbers: true,
    tabSize: 2,
    value: 'console.log("Hello")',
    theme: 'monokai',
    mode: 'javascript',
    smartIndent: true
  });
})