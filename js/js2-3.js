

function subnum() {
    document.getElementById("totalPerson").value = (document.getElementById("totalPerson").value) * 1 - 1;

}

function addnum() {
    console.log(typeof document.getElementById("tt").value);
    document.getElementById("totalPerson").value = (document.getElementById("totalPerson").value) * 1 + 1;
    document.getElementById('nn').oninput;
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
var ttInput=document.getElementById("tt");
function setVal() {
    ttInput.value=document.getElementById('nn').value;
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
var y=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
var par=[4,5,6];
var pas=[7,8,9,10];
var paf=[11,12,13,14];
var pag=[15,16,17,18];
var a;
var b;
var c;
var d;
var x;

window.onload=function () {
    var x=document.getElementById("tt").value;
       x=Math.floor(Math.random()*y.length)+4;
       console.log(x);
       if(x===par){
           var a=document.getElementById("sha").value;
           document.getElementById("sha").value=1;
    }else {
          if(x===pas) {
              var b=document.getElementById("sha").value;
              document.getElementById("sha").value=2;
          }else {
              if(x===paf){
                  var c=document.getElementById("sha").value;
                  document.getElementById("sha").value=3;
              }else {
                  if(x===pag){
                      var d=document.getElementById("sha").value;
                      document.getElementById("sha").value=3;
                  }else{

                  }
              }
          }
    }



    var inputs = document.getElementsByTagName("input");


    ttInput.oninput = function () {
            var tt = ttInput.value;
            if(tt>=4&&tt<=18){
                document.getElementById("hum-1").style.display="block";
            }else {
                document.getElementById("hum-1").style.display="none";
            }

            document.getElementById("ping").value=tt-1;
            document.getElementById("sha").value =tt-document.getElementById("ping").value;
    }

}







