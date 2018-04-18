$(document).ready(function () {
    //取上一个页面保存的玩家分配信息
    var peoplerel = JSON.parse(sessionStorage.getItem("peoplerel"));
    console.log(peoplerel);

    //第一天点击滑动下拉框效果
    $(".top").click(function () {
        $(".mid").slideToggle("slow");
    });

    //点击退后按钮会返回上一页面
    $('.top-left').click(function () {
        window.location.href = '查看身份.html';
    });



    //创建一个控制阶段的有限状态机$state;
    var fsm = new StateMachine({
        init: 'ready',
        transitions: [
            {name: 'tokill', form: 'ready', to: 'kill'},
            {name: 'towords', form: 'kill', to: 'words'},
            {name: 'tospeak', form: 'words', to: 'speak'},
            {name: 'tovote', form: 'speak', to: 'vote'},
            {name: 'toready', form: '*', to: 'ready'}
        ],
        methods:{
            ontokill: function () {
                alert(1)
                // $('tte1').click(function () {
                //     console.log(2);
                //     alert('开始杀人');
                //     $('tte').css('background-color','#746b5c');
                // })
            },
            ontte2: function () {
                $('tte').css('backgroundColor','#746b5c;');
            },
            ontte3: function () {
                $('tte').css('backgroundColor','#746b5c;');
            },
            ontte4: function () {
                $('tte').css('backgroundColor','#746b5c;');
            }
        }
    })




});

