require.config({
  paths: { vs: 'https://unpkg.com/monaco-editor@latest/min/vs' },
});
require(['vs/editor/editor.main'], function () {
  var editor = monaco.editor.create(document.getElementById('main'), {
    value: '',

    theme: 'vs-dark',
    language: 'js',
  });

  _getText = function () {
    return editor.getValue();
  };

  _setText = function (obj) {
    editor.setValue(obj);
  };

  _setTheme = function (theme) {
    editor.setTheme(theme);
  };
});
//a
