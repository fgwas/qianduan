$(document).ready(function () {

    $('li').hide();
    $('ul').click(function () {
        $(this).children().slideToggle('fast');
    })
});
