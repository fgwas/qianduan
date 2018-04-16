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
    })








});

