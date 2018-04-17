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


    var day = new StateMachine({

        init: '0',
        transitions: [
            {name: 'time', form: '0', to: '1'},
            {name: 'time', form: '1', to: '2'},
            {name: 'time', form: '2', to: '2'},
            {name: 'time', form: '3', to: '4'},
            {name: 'time', form: '4', to: '5'},
            {name: 'time', form: '5', to: '6'},
            {name: 'time', form: '6', to: '7'},
            {name: 'time', form: '7', to: '8'},
            {name: 'time', form: '8', to: '9'}
        ],
        methods:{
          ontime:function () {
              
          }
        }


    })


});

