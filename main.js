init();

function getTimeAsHex(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    if(hour < 10) { hour = "0" + hour; }
    if(minute < 10)  { minute = "0" + minute; }
    if(second < 10)  { second = "0" + second; }

    return "#" + hour + minute + second;
}

function updateBg(){
    const bod = document.getElementsByTagName("body")[0];
    bod.style.backgroundColor = getTimeAsHex();
}

function updateText(){
    const time = document.getElementsByClassName("clock")[0];
    time.innerHTML = getTimeAsHex();
}

function init(){
    setInterval(updateBg, 1000);
    setInterval(updateText, 1000);
}