var text = '{"Title":"Shark Stories","Date":"15 December 2015- 18th December 2015","phone":"555 1234567"}'

var obj = JSON.parse(text);

document.getElementById("demo").innerHTML =
    obj.Title + "<br>" +
    obj.Date + "<br>" +
    obj.phone;