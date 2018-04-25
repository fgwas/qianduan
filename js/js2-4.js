//取上一个页面保存的玩家分配信息
//获取总人数状态
var peoplerelstate = JSON.parse(sessionStorage.getItem('peoplerelstate'));
console.log(peoplerelstate);
var peoplerel = JSON.parse(sessionStorage.getItem('peoplerel'));
//被杀人数
var akiller = JSON.parse(sessionStorage.getItem('akiller'));
console.log(akiller);
//被投票人数
var avoter = JSON.parse(sessionStorage.getItem('avoter'));
console.log(avoter);

//玩家死亡数
var deathnum = JSON.parse(sessionStorage.getItem('deathnum'));
//天数days
var days = JSON.parse(sessionStorage.getItem('days'));
if (days === undefined) {
    days = 1;
}
console.log(days);

$(document).ready(function () {
    var jjj = [];
    for (var h = 0; h < 5; h++) {
        jjj.push(
            '<div class="top" id="day">第一天</div>' +
            '<div class="mid">' +
            '<div class="right" id="menu">' +
            '<p class="tte" id="tokill">杀手杀人</p>' +
            '<div class="eer"></div>' +
            '<p class="tte" id="towords">亡灵发表遗言</p>' +
            '<p class="tte" id="tospeak">玩家依次发言</p>' +
            '<p class="tte" id="tovote">全民投票</p>' +
            '<div class="eef"></div>' +
            '<div class="moon"></div>' +
            '<div class="sun"></div>' +
            '</div>' +
            '</div>'
        )
    };
    $(".box").html(jjj.join(""));





    //点击滑动下拉框效果
    $(".top").click(function () {
        $(".mid").slideToggle("slow");
    });

//点击退后按钮会返回上一页面
    $('.top-left').click(function () {
        window.location.href = '查看身份.html';
    });

});


//页面渲染
// $(document).ready(function () {
//     var p;
//     for (p = 0; p < peoplerelstate.length; p++) {
//         if (days !== 0) {
//             if (peoplerelstate[p].type === 'akiller') {
//                 console.log(p);
//                 $('.eer').append('昨夜' + (peoplerelstate[p].num) + '号被杀死,' + '身份是' + (peoplerelstate[p].id));
//                 $('.tte').eq(0).css('background', 'gray');
//             } else if (peoplerelstate[p].type === 'avoter') {
//                 console.log(p);
//                 $('.eef').append('昨夜' + (peoplerelstate[p].num) + '号被投死,' + '身份是' + (peoplerelstate[p].id));
//                 $('.tte').css('background', 'gray');
//             }
//         } else {
//             return false;
//         }
//     }
// });


//点击杀手杀人
$(document).ready(function () {
    $('.tte').eq(0).click(function () {
        if ($('#tokill').css('background-color') === 'gray') {
            alert("你今天已经杀过人了！");
        } else {
            alert('你准备好了吗？');
            sessionStorage.setItem('peoplerelstate', JSON.stringify(peoplerelstate));
            sessionStorage.setItem('peoplerel', JSON.stringify(peoplerel));
            sessionStorage.setItem('akiller', JSON.stringify(akiller));
            window.location.href = '杀手杀人.html';
            $(this).toggleClass('death');
        }
    });
    $('.tte').eq(1).click(function () {
        if ($('#towords').css('background') === 'gray') {
            alert("按流程操作");
        } else {
            alert("请亡灵发表言论");
            $(this).toggleClass('death');
        }
    });
    $('.tte').eq(2).click(function () {
        if ($('#tospeak').css('background') === 'gray') {
            alert("按流程操作");
        } else {
            alert("玩家依次发言");
            $(this).toggleClass('death');
        }
    });

    $('.tte').eq(3).click(function () {
        if ($('#tovote').css('background-color') === 'gray') {
            alert("这是上一天");
        } else {
            alert("全民投票");
            $(this).toggleClass('death');
            sessionStorage.setItem('peoplerelstate', JSON.stringify(peoplerelstate));
            sessionStorage.setItem('peoplerel', JSON.stringify(peoplerel));
            sessionStorage.setItem('akiller', JSON.stringify(akiller));
            window.location.href = '投票页.html';
        }
    });


    $('#day').html('第' + days + '天');
    console.log(days);
});



