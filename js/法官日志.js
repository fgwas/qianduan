$(document).ready(function () {
    //取上一个页面保存的玩家分配信息
    var peoplerel = JSON.parse(sessionStorage.getItem("peoplerel"));
    console.log(peoplerel);

    window.onload=function () {
     for(i=0;i<peoplerel.length;i++){
         var tt1=$('<div></div>').text(peoplerel[i]).addClass('top');
         var tt2=$('<div></div>').text(i+1).addClass('mid');
         var tt3=$('<div></div>').addClass('box');
        $('main').append(tt3);
        $(tt3).append(tt1,tt2);
     }

    }

});

