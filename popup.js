document.addEventListener('DOMContentLoaded', function () {
    $('#note').val(localStorage.getItem('note'));
    $('#note').on('keydown keyup focus blur', function () {
        localStorage.setItem('note',$('#note').val());
    });
    $('#clear').on('click', function (e) {
        e.preventDefault();

        localStorage.removeItem('note');
        $('#note').val('');
    });
});
