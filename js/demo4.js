function update() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        // console.log(this.responseText);
        // convert to obj of js
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        var t2 = data.name +", "+data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2;
        var t3 = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = t3;
        var t4 = data.main.humidity;
        var x4 = document.getElementById("humi");
        x4.innerText = t4;
        var t5 = data.wind.speed;
        var x5 = document.getElementById("wind");
        x5.innerText = t5;
        var t6 = data.main.feels_like;
        var x6 = document.getElementById("feel");
        x6.innerText = t6;

    }
    xhttp.open("get","https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric",true);
    xhttp.send();
}
function update2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        // console.log(this.responseText);
        // convert to obj of js
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        var t2 = data.name +", "+data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2;
        var t3 = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = t3;
        var t4 = data.main.humidity;
        var x4 = document.getElementById("humi");
        x4.innerText = t4;
        var t5 = data.wind.speed;
        var x5 = document.getElementById("wind");
        x5.innerText = t5;
        var t6 = data.main.feels_like;
        var x6 = document.getElementById("feel");
        x6.innerText = t6;
    }
    xhttp.open("get","https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric",true);
    xhttp.send();
}
function update3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        // console.log(this.responseText);
        // convert to obj of js
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        var t2 = data.name +", "+data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2;
        var t3 = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = t3;
        var t4 = data.main.humidity;
        var x4 = document.getElementById("humi");
        x4.innerText = t4;
        var t5 = data.wind.speed;
        var x5 = document.getElementById("wind");
        x5.innerText = t5;
        var t6 = data.main.feels_like;
        var x6 = document.getElementById("feel");
        x6.innerText = t6;
    }
    xhttp.open("get","https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric",true);
    xhttp.send();
}
function update4() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        // console.log(this.responseText);
        // convert to obj of js
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        var t2 = data.name +", "+data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2;
        var t3 = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = t3;
        var t4 = data.main.humidity;
        var x4 = document.getElementById("humi");
        x4.innerText = t4;
        var t5 = data.wind.speed;
        var x5 = document.getElementById("wind");
        x5.innerText = t5;
        var t6 = data.main.feels_like;
        var x6 = document.getElementById("feel");
        x6.innerText = t6;
    }
    xhttp.open("get","https://api.openweathermap.org/data/2.5/weather?q=New York&appid=09a71427c59d38d6a34f89b47d75975c&units=metric",true);
    xhttp.send();
}
function update5() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        // console.log(this.responseText);
        // convert to obj of js
        var data = JSON.parse(this.responseText);
        // console.log(data.main.temp);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        var t2 = data.name +", "+data.sys.country;
        var x2 = document.getElementById("city");
        x2.innerText = t2;
        var t3 = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = t3;
        var t4 = data.main.humidity;
        var x4 = document.getElementById("humi");
        x4.innerText = t4;
        var t5 = data.wind.speed;
        var x5 = document.getElementById("wind");
        x5.innerText = t5;
        var t6 = data.main.feels_like;
        var x6 = document.getElementById("feel");
        x6.innerText = t6;
    }
    xhttp.open("get","https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric",true);
    xhttp.send();
}