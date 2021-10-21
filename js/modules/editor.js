var __CD_EDITOR_MAIN = null


document.addEventListener('DOMContentLoaded', function (event) {
  __CD_EDITOR_MAIN = CodeMirror.fromTextArea(
    document.getElementById('__EDITOR-MAIN'),
    {
      mode: 'javascript',
      lineNumbers: true,
    }
  );
});
