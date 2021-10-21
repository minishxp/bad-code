
document.addEventListener('DOMContentLoaded', function (event) {
  let editor = CodeMirror.fromTextArea(
    document.getElementById('__EDITOR-MAIN'),
    {
      mode: 'javascript',
      lineNumbers: true,
    }
  );
});
