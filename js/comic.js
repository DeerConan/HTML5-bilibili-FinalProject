
//banner板块随着banner mp4的高度变化而变化 不能影响到下面的版块
function channel() {
    var banner = document.getElementById("banner");

    var wh = 1920 / (290 - 290 * 0.3)

    var h = banner.clientWidth / wh

    banner.style.height = h + "px";

}

setInterval(channel, 1000);

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