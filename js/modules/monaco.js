var h_div = document.getElementById('__EDITOR-WRAP');
var editor = monaco.editor.create(h_div, {
    value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
    ].join('\n'),
    language: 'javascript'
});