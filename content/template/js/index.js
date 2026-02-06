var num = 0;
var playType;
var player;
window.onload = function () {
    var typeSel = document.getElementById("typeSel");
    var oUl = document.getElementById("list");
    var str = '';
    for (var i = 0; i < arrCont.length; i++) {
        str += '<li class="video">第' + (i+1) + '章：' + arrCont[i].discription + '</li>';
    }
    oUl.innerHTML = str;
    player = document.getElementById("player");
    player.src = 'video/' + arrCont[0].src;
    var aLi = document.getElementsByClassName("video");
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onclick = function () {
            num = this.index;
            for(var i = 0; i < aLi.length; i++) {
                aLi[i].className = "video";
            }
            aLi[num].className = "video active";
            for(var i = 0; i < aLi.length; i++){
                //页面加载时播放第一个音频文件
                player.src = 'video/' + arrCont[num].src;
            }
            player.play();
            typeSel.onchange = function () {
                window.playType = typeSel.value;
            }
            player.onended = function () {
                if (playType == "random") {
                    //计算一个随机数
                    num = Math.floor(Math.random() * arrCont.length);
                    //随机播放一个音频
                    player.src = 'video/' + arrCont[num].src;
                    for (var i = 0; i < aLi.length; i++) {
                        aLi[i].className = "video";
                    }
                    aLi[num].className = "video active";
                } else if (playType == "sequence") {
                    //播放下一个音频
                    player.src = 'video/' + arrCont[++num % arrCont.length].src;
                    for (var i = 0; i < aLi.length; i++) {
                        aLi[i].className = "video";
                    }
                    aLi[num].className = "video active";
                }else{
                    player.src = 'video/' + arrCont[num].src;
                    for (var i = 0; i < aLi.length; i++) {
                        aLi[i].className = "video";
                    }
                    aLi[num].className = "video active";
                }
                player.play();
            }
        }
    }
}