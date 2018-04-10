function subnum() {
    document.getElementById("tt").value = (document.getElementById("tt").value) * 1 - 1;

}

function addnum() {
    console.log(typeof document.getElementById("tt").value);
    document.getElementById("tt").value = (document.getElementById("tt").value) * 1 + 1;

}


var txt = "";

function uuu() {
    var x;
    x = document.getElementById("tt").value;
    if (isNaN(x) || x < 4 || x > 18) {
        txt += "请输入正确的玩家数量" + "\n\n";
        alert(txt);
    } else {
        window.location.href = "../qianduan/js2-2.html";
    }
}

var flag = true;

function hum(){
    var div = document.getElementById("hum-1");
    if (flag) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
    flag = !flag;
}



 window.onload=function () {
     var inputs=document.getElementsByTagName("input");

 }






