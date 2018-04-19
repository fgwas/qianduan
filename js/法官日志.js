$(document).ready(function () {
    //取上一个页面保存的玩家分配信息
    var peoplerel = JSON.parse(sessionStorage.getItem("peoplerel"));
    console.log(peoplerel);

    days = 1;//初始化游戏天数
    akiller = [];//存放被杀玩家
    avoter = [];//存放被投票玩家

    sessionStorage.setItem('days', JSON.stringify(days));
    sessionStorage.setItem('akiller', JSON.stringify(akiller));
    sessionStorage.setItem('avoter', JSON.stringify(avoter));
    sessionStorage.setItem('step', 'none');

    window.onload = function () {
        for (var i = 0; i < peoplerel.length; i++) {
            var num = i + 1;
            var tt1 = $('<div></div>').text(peoplerel[i]).addClass('top');
            var tt2 = $('<div></div>').text(num + '号').addClass('mid');
            var tt3 = $('<div></div>').addClass('box');
            $('main').append(tt3);
            $(tt3).append(tt1, tt2);


        }
    };
    window.sessionStorage.setItem('peoplerel', JSON.stringify(peoplerel));

    $('.box').click(function () {

        $('.top').css('background', 'black');
        $('.top').css('color', 'white');
    })


});

