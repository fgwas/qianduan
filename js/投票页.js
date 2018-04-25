var peoplerelstate = JSON.parse(sessionStorage.getItem('peoplerelstate'));
console.log(peoplerelstate);
var peoplerel = JSON.parse(sessionStorage.getItem('peoplerel'));
var days = JSON.parse(sessionStorage.getItem('days'));
var akiller = JSON.parse(sessionStorage.getItem('akiller'));


$(document).ready(function () {

    for (var i = 0; i < peoplerel.length; i++) {
        var num = i + 1;
        var tt1 = $('<div></div>').text(peoplerel[i]).addClass('top');
        var tt2 = $('<div></div>').text(num + '号').addClass('mid');
        var tt3 = $('<div></div>').addClass('box');
        if (peoplerelstate[i].status === 'die') {
            $(tt1).removeClass('.top');
            $(tt1).addClass('black');
            console.log(peoplerelstate[i]);
        }
        $('main').append(tt3);
        $(tt3).append(tt1, tt2);
    }


    $('.box').click(function () {
        var m = $(this).index();
        if (peoplerelstate[m].status === 'die') {
            alert("不要鞭尸！");
        } else {
            $('.top').removeClass('black2');
            $(this).find('.top').addClass('black2');
            sessionStorage.setItem('m', JSON.stringify(m));
        }
    });
});

function eee() {
    var m = JSON.parse(sessionStorage.getItem('m'));
    console.log(m);
    alert("确定杀他吗？");
    peoplerelstate[m].status = 'die';
    peoplerelstate[m].type='avoter';
    days = days + 1;
    peoplerelstate.days++;
    days++;
    sessionStorage.setItem('peoplerelstate', JSON.stringify(peoplerelstate));
    window.location.href = '法官日记.html';
}

