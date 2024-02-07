function createCookie(name, value) {

    var time = new Date();
    time.setDate(time.getDate() + 1) ;  //현재 날짜 + 1
    document.cookie = name + "=" + value + "; expires=" + time.toUTCString();
}

function findCookie(find) {
    var coo = document.cookie; //쿠키를 얻음 key=value; key2=value2; ,,, 의 형태로 얻는다
    var arr = coo.split("; "); //쿠키를 ";"로 스플릿 하여 배열로 얻는다

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(find + "=") != -1) { //이름으로 쿠키를 찾음(indexOf)
            console.log(arr[i].replace(find + "=", "")); //key= 을 공백으로 변경(replace)한다
            return true; //쿠키이름(find)가 있다면 true 반환. 없다면 undefined 반환된다(따로 설정 안했으므로)
        }
    }
}