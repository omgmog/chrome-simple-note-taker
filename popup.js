document.addEventListener('DOMContentLoaded', function () {
    var textarea = document.getElementById('note');
    var button = document.getElementById('clear');

    var store_value = function() {
        localStorage.setItem('note', textarea.value);
    };
    var read_value = function() {
        localStorage.getItem('note');
    };
    var clear_value = function() {
        localStorage.removeItem('note');
        textarea.value = '';
    };

    textarea.onkeydown = function(evt) {
        evt = evt || window.event;
        store_value();
    };
    textarea.onkeyup = function(evt) {
        evt = evt || window.event;
        store_value();
    };

    textarea.value = localStorage.getItem('note');

    button.onclick = clear_value;
});
