function forecastAjax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var data = JSON.parse(this.responseText);
        var list = data.list;
        for ( var i=0;i<list.length;i++){
            var t1 = list[i].dt_txt;
            var temp = list[i].main.temp;
            var i1 = list[i].weather[0].icon;
            var d1 = list[i].weather[0].description;
            var content = `<div class="box-weather">
                <h4>${t1}</h4>
                <h2>${temp}<sup>o</sup>C</h2>
                <p>${d1}</p>
                <img src="https://openweathermap.org/img/wn/${i1}@2x.png"/>
            </div>`
            var div = document.getElementById("forecast");
            div.innerHTML += content;
        }
    }
    xhttp.open("get","https://api.openweathermap.org/data/2.5/forecast?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric",true);
    xhttp.send();
}
forecastAjax();
