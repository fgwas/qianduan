$(document).ready(function () {
    //获取上个页面的所有玩家信息
    var peoplerelstate = JSON.parse(sessionStorage.getItem('peoplerelstate'));
    console.log(peoplerelstate);
    var peoplerel = JSON.parse(sessionStorage.getItem('peoplerel'));
    console.log(peoplerel);
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


    // var lastclick;//最后点击的玩家
    // var j;




    //定义一个数组，存放所有玩家的点击盒子，
    // 后面点击之后，遍历这个数组，用来改变样式
    var boxes = [];
    $(document).ready(function () {
        $(".box").push(boxes);
        alert($(".box").length)
    });


    var akiller = [];//被杀死的玩家，及最后选择的玩家
    $(".box").click(function () {
        //点击控件的下标
        var xiabiao = $(this).index();
        //点击之后，1、首先判断身份，
        // 2.1、如果是平民，2.2、且之前未被杀死，则被杀死
        //3、如果是杀手，则不能杀
        var shenfen = peoplerelstate[xiabiao].id;

        if (shenfen === "平民") {
            //判断之前是否被杀死
            // if (akiller.length > 0 && akiller.contains(peoplerelstate[xiabiao].num)) {
            if (akiller.length > 0 && isInArray(akiller, peoplerelstate[xiabiao].num)) {
                alert("已经被杀");
            } else {
                akiller.push(peoplerelstate[xiabiao].num);
                //todo 改变样式
                alert("改变样式");
                changeUI(peoplerelstate[xiabiao].num);
                $(this).find('.top').css('background','black');
            }
        } else {
            alert("不能杀");
        }


        // for (j = 0; j < peoplerelstate.length; j++) {
        //     peoplerelstate[j].index = j;
        //
        //     var akiller = [];//被杀死的玩家，及最后选择的玩家
        //     akiller.push(peoplerelstate[this.index].num);
        //     console.log(akiller);
        //
        //     sessionStorage.setItem('akiller', JSON.stringify(akiller));
        //     //获得最后点击玩家的号码，如果玩家状态是死亡
        //     if (peoplerelstate[this.index].id === '杀手' || peoplerelstate[this.index].status === 'die') {
        //         if (peoplerelstate[this.index].status === 'die') {
        //             alert('我已经死过了');//之前死过了
        //         } else {
        //             alert('你可以死了');//第一次死
        //         }
        //
        //     } else {//如果玩家是平民
        //         if (lastclick !== undefined) {
        //             //如果成立,及之前点击过其他的玩家，及清除之前玩家的背景色
        //             $(peoplerelstate[lastclick]).css('background', '#f5c97b');
        //             //之前玩家的状态还是live
        //             peoplerelstate[lastclick].status = 'live';
        //         } else {
        //             //改变选择玩家的背景色
        //             $(peoplerelstate[this.index]).css('background', 'black');
        //             //玩家状态变为die
        //             peoplerelstate[this.index].status = 'die';
        //             console.log(peoplerelstate[this.index].status);
        //             //及最后选则的玩家就是
        //             lastclick = this.index;
        //         }
        //     }
        // }
    })


    function changeUI(userId) {
//1、遍历.box里面的.top，
// 2、看哪个top的id，跟用用户Id对应，
// 3、符合条件的，背景变黑，其他的背景不变


    }


    function isInArray(arr, value) {
        for (var i = 0; i < arr.length; i++) {
            if (value === arr[i]) {
                return true;
            }
        }
        return false;
    }
});



