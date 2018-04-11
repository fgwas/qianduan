//
//
// function subnum() {
//     document.getElementById("tt").value = (document.getElementById("tt").value) * 1 - 1;
//
// }
//
// function addnum() {
//     console.log(typeof document.getElementById("tt").value);
//     document.getElementById("tt").value = (document.getElementById("tt").value) * 1 + 1;
//
//
// }


document.getElementById("add").onclick = function () {
    document.getElementById("nn").value = (document.getElementById("nn").value) * 1 + 1;
    document.getElementById("totalPerson").value = (document.getElementById("totalPerson").value) * 1 + 1;
    totalChange();
}

document.getElementById("sub").onclick = function () {
    document.getElementById("nn").value = (document.getElementById("nn").value) * 1 - 1;
    document.getElementById("totalPerson").value = (document.getElementById("totalPerson").value) * 1 - 1;
    totalChange();
}

function uuu() {
    var x;
    x = document.getElementById("totalPerson").value;
    if (isNaN(x) || x < 4 || x > 18) {
        txt += "请输入正确的玩家数量" + "\n\n";
        alert(txt);
    } else {
        window.location.href = "../qianduan/js2-2.html";
    }
}

var flag = true;

function setVal() {
    document.getElementById("totalPerson").value = document.getElementById('nn').value;
}


function totalChange() {
    var totalPerson = document.getElementById("totalPerson").value;
    var ping = 0;
    var sha = 0;

    if (totalPerson >= 4 && totalPerson <= 6) {
        ping = totalPerson - 1;
        sha = 1;
    }
    if (totalPerson > 6 && totalPerson <= 10) {
        ping = totalPerson - 2;
        sha = 2;
    }
    if (totalPerson > 10 && totalPerson <= 14) {
        ping = totalPerson - 3;
        sha = 3;
    }
    if (totalPerson > 14 && totalPerson <= 18) {
        ping = totalPerson - 4;
        sha = 4;
    }

    document.getElementById("ping").value = ping;
    document.getElementById("sha").value = sha;
    document.getElementById("nn").value = totalPerson;
}

function hum() {
    var div = document.getElementById("hum-1");
    if (flag) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
    flag = !flag;
}


// document.getElementById("totalPerson").bind('input propertychange', function() {
//     alert('hello');
// });

// document.getElementById("totalPerson").value.onchange = function ()
// var tt = document.getElementById("totalPerson").value;
// alert(tt);
// if (tt >= 4 && tt <= 18) {
//     document.getElementById("hum-1").style.display = "block";
// } else {
//     document.getElementById("hum-1").style.display = "none";
// }
// if (tt >= 4 && tt <= 6) {
//     document.getElementById("ping").value = tt - 1;
//     document.getElementById("sha").value = tt - document.getElementById("ping").value;
// } else if (tt > 6 && tt <= 10) {
//     document.getElementById("ping").value = tt - 2;
//     document.getElementById("sha").value = tt - document.getElementById("ping").value;
// } else if (tt > 10 && tt <= 14) {
//     document.getElementById("ping").value = tt - 3;
//     document.getElementById("sha").value = tt - document.getElementById("ping").value;
// } else if (tt > 14 && tt <= 18) {
//     document.getElementById("ping").value = tt - 4;
//     document.getElementById("sha").value = tt - document.getElementById("ping").value;
// }
// }







