$(document).ready(function () {
    //
    var peoplerelstate = JSON.parse(sessionStorage.getItem('peoplerelstate'));
    console.log(peoplerelstate);
    var peoplerel = JSON.parse(sessionStorage.getItem('peoplerel'));
    var akiller = JSON.parse(sessionStorage.getItem('akiller'));
    console.log(akiller);


    for (var i = 0; i < peoplerel.length; i++) {
        var num = i + 1;
        var tt1 = $('<div></div>').text(peoplerel[i]).addClass('top');
        var tt2 = $('<div></div>').text(num + '号').addClass('mid');
        var tt3 = $('<div></div>').addClass('box');
        $('main').append(tt3);
        $(tt3).append(tt1, tt2);


    }


    var boxes = [];
    $(document).ready(function () {
        $(".box").push(boxes);
        console.log($('.box').length)
    });


    $(".box").click(function () {
        //点击控件下标
        var o = $(this).index();
        num = o + 1;
        console.log(num);//验证下标序号
        console.log(peoplerelstate[o].id);//验证下标id


        //判断
        //如果是杀手
        if (peoplerelstate[o].id === "杀手") {
            alert('自己人 别杀！');
        } else {
            //如果身份是平民
            if (peoplerelstate[o].id === "平民") {
                //且如果平民状态死亡
                if (peoplerelstate[o].status !== "live") {
                    alert('已经被杀！');
                } else {
                    //或如果平民状态是存在
                    console.log(this);
                    $('.box').find('.top').css('background','#f5c97b');
                    $(this).find('.top').css('background', 'black');

                    $('#start').click(function () {
                        peoplerelstate[o].status = 'die';
                        window.location.href = '法官日记.html';

                    });

                }
            } else {
                //玩家身份是杀手
                alert('自己人 别杀！')

            }
        }
    });

});


