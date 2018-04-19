$(document).ready(function () {
    //取上一个页面保存的玩家分配信息
    //获取总人数状态
    var peoplerel = JSON.parse(sessionStorage.getItem('peoplerel'));
    console.log(peoplerel);
    //被杀人数
    var akiller = JSON.parse(sessionStorage.getItem('akiller'));
    console.log(akiller);
    //被投票人数
    var avoter = JSON.parse(sessionStorage.getItem('avoter'));
    console.log(avoter);
    //天数days
    var days = JSON.parse(sessionStorage.getItem('days'));
    if (days === undefined) {
        days = 1;
    }
    console.log(days);

    var step=sessionStorage.getItem('step');
    console.log(step);


    //点击滑动下拉框效果
    $(".top").click(function () {
        $(".mid").slideToggle("slow");
    });

    //点击退后按钮会返回上一页面
    $('.top-left').click(function () {
        window.location.href = '查看身份.html';
    });


    $('#day').text('第' + days + '天');
    if (days > 1) {
        for (var i = 0; i < days - 1; i++) {
            var day = i + 1;
            $('#day').text('第' + day + '天');
        }
    }
    console.log(day);


    // //创建一个控制阶段的有限状态机;
    // var fsm = new StateMachine({
    //     init: 'none',
    //     transitions: [
    //         {name: 'kill', form: 'none', to: 'kill'},
    //         {name: 'words', form: 'kill', to: 'words'},
    //         {name: 'speak', form: 'words', to: 'speak'},
    //         {name: 'vote', form: 'speak', to: 'vote'},
    //         {name: 'goto', form: '*', to: 'none'}
    //     ],
    //     methods: {
    //         onAfterKill: function (lifecycle) {
    //             console.log(123123123);
    //             var stateDie = fsm.state;
    //             localStorage.setItem('stateDie', stateDie);
    //             $('#tokill').css('backgroundColor', '#18758D');
    //
    //
    //         },
    //         wordsPass: function () {
    //             $('tte').css('backgroundColor', '#746b5c;');
    //         },
    //         speakPass: function () {
    //             $('tte').css('backgroundColor', '#746b5c;');
    //         },
    //         votePass: function () {
    //             $('tte').css('backgroundColor', '#746b5c;');
    //         }
    //     }
    // })

    $('#tokill').click(function () {
        if(step===1){
            alert("你今天已经杀过人了！");
        }else {
            alert('你准备好了吗？');
            window.location.href='法官日志.html';
            $('#tokill').css('background','#18758D');

        }
    })




});

