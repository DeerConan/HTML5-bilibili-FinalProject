
//banner板块随着banner mp4的高度变化而变化 不能影响到下面的版块
function channel() {
    var banner = document.getElementById("banner");

    var wh = 1920 / (290 - 290 * 0.3)

    var h = banner.clientWidth / wh

    banner.style.height = h + "px";

}

setInterval(channel, 1000);


//轮播图

var swipe_main = document.getElementById('recommend-swipe');
var imglist = document.getElementById('imglist');
var text1 = document.getElementById('text1');
var imglist_li = document.getElementById('imglist').getElementsByTagName('li');
var swipe_bgc = document.getElementById('swipe_bgc');
var bnts = document.getElementById('bnts');
var bnt = bnts.getElementsByTagName('span');
var dots = document.getElementById('dots').getElementsByTagName('li');

var swipe_w = swipe_main.clientWidth;
bgc = ["rgba(94, 137, 251)", "rgba(152, 165, 193)", "rgba(231, 191, 196)", "rgba(202, 201, 183)", "rgb(47, 47, 79)", "rgb(83, 63, 63)", "rgb(63, 62, 61)", "rgb(162, 155, 171)", "rgb(88, 180, 207)"]
text = ["2020毕业季『哔哩哔哩』", "1分钟看完柯南1000集套路？", "甜心教主王心凌的《爱你》", "校园十佳歌手大赛『青年一派』", "洛天依十周年生日会去♪(´▽｀)", "那些散落在时空的镇站之宝", "人生第二次 每周17：00更新", "来b站用画笔构建世界吧！", "创作充电计划火热征稿中>>>"]
imglist.style.width = swipe_w * imglist_li.length + "px";
for (let i = 0; i < imglist_li.length; i++) {
    imglist_li[i].style.width = swipe_w + "px";
}

var index = 0;
imglist.style.left = 0;


swipe_main.onmouseenter = function () {
    clearInterval(id);
}
swipe_main.onmouseleave = function () {
    autoBtn();

}
//向前进
function rightBtn() {
    dots[index].className = " ";
    index++;
    if (index > imglist_li.length - 1) {
        index = 0
    }
    if (index > 0) imglist.id = "imglist";
    imglist.style.left = -swipe_w * index + "px";
    text1.innerHTML = text[index]
    swipe_bgc.style.background = bgc[index];
    imglist_li[index].style.width = swipe_w + "px";
    dots[index].className = "on";
}
function dotsclick(x) {
    dots[x].onclick = function () {
        dots[index].className = " ";
        index = x;
        if (index > imglist_li.length - 1) index = 0;
        imglist.style.left = -swipe_w * index + "px";
        text1.innerHTML = text[index]
        swipe_bgc.style.background = bgc[index];
        dots[index].className = "on";
    }
}
for (x = 0; x < dots.length; x++) {
    dotsclick(x);
}

//向后退
bnt[0].onclick = function () {
    dots[index].className = " ";
    index--;
    if (index < 0) index = imglist_li.length - 1;
    imglist.style.left = -swipe_w * index + "px";
    text1.innerHTML = text[index]
    swipe_bgc.style.background = bgc[index];
    dots[index].className = "on";
}
bnt[1].onclick = rightBtn;

function autoBtn() {
    id = setInterval(
        rightBtn, 2000);
}
autoBtn();

var x = window.innerWidth;

function resizeFresh() {

    if (x != window.innerWidth) {

        location.reload();
    }


}
setInterval(resizeFresh, 1000);
//
// 视频
document.getElementById('recommend_v').style.display = "none";

function Cvideo() {
    document.getElementById('recommend_v').style.display = "";
    document.getElementById('recommend_i').style.display = "none";
}

function Cimg() {
    document.getElementById('recommend_v').style.display = "none";
    document.getElementById('recommend_i').style.display = "";
}

//导航栏出现
document.getElementById('bar01').style.display = "none";

function myScript() {
    var scrollTop = window.pageYOffset || window.document.documentElement.scrollTop;
    var scrolLeft = window.pageXOffset || window.document.documentElement.scrollLeft;
    if (scrollTop > 64) {
        document.getElementById('bar01').style.display = "";
    }
    if (scrollTop < 64) {
        document.getElementById('bar01').style.display = "none";
    }
    document.getElementById('bar01').style.left = -scrolLeft + "px";
}

//滚动监听事件
document.addEventListener("scroll", myScript);

//登录


document.getElementById('login_v').style.display = "none";

function login_v() {
    document.getElementById('login_v').style.display = "";
}

function login_n() {
    document.getElementById('login_v').style.display = "none";
}