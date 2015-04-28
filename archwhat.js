//assuming this comes from an ajax call
var info = [{



    "Event": "Storytelling - Viking Stories of Gods, Heroes, Baddies and Brutes!",
    "Start Date": "18th April 2015",
    "Finish Date": "18th April 2015",
    "Time": "2.30-3.30pm",
    "Location": "Archaeology",
    "Description": "Join Niall de Búrca, live, for mighty tales of Gods, heroes, baddies and brutes. Niall has performed to audiences all over the world in places as diverse as Tehran, Los Angeles, Buenos Aires and Bucharest and his motto is: Níor bhris focal maith fiacal riamh!...A good word never broke a tooth!",
    "Booking Information": "This event will take place in the Ceramics Room, First Floor. No booking required, places will be allocated on a first come basis. Not wheelchair accessible.",
    "Format": "Family Event",
    "Audience": "Ages 6+"
},{

    "Event": "Bealtaine Workshop - Irish Leather Craft",
    "Start Date": "7th May 2015",
    "Finish Date": "8th May 2015",
    "Time": "11am-3pm",
    "Location": "Archaeology",
    "Description": "To celebrate Bealtaine in the Year of Irish Design 2015, the National Museum is delighted to welcome designer and artist Róisín Gartland who will facilitate a two-day workshop. Participants will work with expert leather-worker Róisín to create their own leather object based on ancient examples of Irish leather design.",
    "Booking Information": "Booking required, please phone 01 6486339 or email educationarch@museum.ie. Located in the Learning Resource Room, first floor. Not wheelchair accessible.",
    "Format": "Workshop",
    "Audience": "Adults"


},{
    "Event": "National Drawing Day 2015 with Kenneth Donfield, National College of Art & Design (NCAD)",
    "Start Date": "16th May 2015",
    "Finish Date": "16th May 2015",
    "Time": "1am-4pm",
    "Location": "Archaeology",
    "Description": "Observe and sketch the Museum's collections and beautiful 19th century building with guidance from artist and tutor in Drawing and Painting at NCAD, Kenneth Donfield. Beginners and experienced artists are welcome.",
    "Booking Information": "Booking required, please phone 01 6486339 or email educationarch@museum.ie. Located on the ground floor and first floor. Partially wheelchair accessible.",
    "Format": "Workshop",
    "Audience": "Adults"




}];

var json = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","ID":"44","str":"SGML","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';


function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}

var js = JSON.parse(json);
console.log(getValues(js,'ID'));
$(document).on("pageinit", "#info-page", function () {


    var li = "";

    $.each(info, function (i,Event) {

        li += '<li><a href="#" id="' + i + '" class="info-go">' + Event.Event + '</a></li>';
    });

    $("#prof-list").append(li).promise().done(function () {

        $(this).on("click", ".info-go", function (e) {
            e.preventDefault();

            $("#details-page").data("info", info[this.id]);

            $.mobile.changePage("#details-page");
        });


        $(this).listview("refresh");
    });
});

$(document).on("pagebeforeshow", "#details-page", function () {

    var info = $(this).data("info");

    var info_view = "";

    for (var key in info) {

        info_view += '<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar field" style="font-weight : bold; text-align: left;">' + key + '</div></div><div class="ui-block-b"><div class="ui-bar value" style="width : 80%">' + info[key] + '</div></div></div>';
    }

    $(this).find("[data-role=content]").html(info_view);
});



