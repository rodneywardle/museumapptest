//assuming this comes from an ajax call
var info = [{


    "Event": "Preserving the Peace",
    "Start Date": "1st April 2015",
    "Finish Date": "30th April 2015",
    "Time": "During Opening Hours",
    "Location": "Country Life",
    "Description": "From gallows, shillelaghs and manacles to the hangman's rope! This exhibition commemorates 200 years of law and order through objects relating to policing, crime, prisons and punishment, highlighting the sometimes uncomfortable reality of Ireland's official past.",
    "Booking Information": "n/a",
    "Format": "Temporary Exhibition",
    "Audience": "All Ages"



},{


    "Event": "Kids Museum: Treasure Hunt",
    "Start Date": " 10th April 2015",
    "Finish Date": "10th April 2015",
    "Time": "2pm-4pm",
    "Location": "Country Life",
    "Description": "Join us for an exciting adventure around the grounds of Turlough Park. Work together to see if you can find all the clues and figure them out. Complete the hunt to get the treasure! ",
    "Booking Information": "Booking required. Weather appropriate clothing recommended.",
    "Format": "Family Event",
    "Audience": "Families"

},{

    "Event": "Preserving the Peace",
    "Start Date": "1st May 2015",
    "Finish Date": "24th May 2015",
    "Time": "During Opening Hours",
    "Location": "Country Life",
    "Description": "From gallows, shillelaghs and manacles to the hangman's rope! This exhibition commemorates 200 years of law and order through objects relating to policing, crime, prisons and punishment, highlighting the sometimes uncomfortable reality of Ireland's official past.",
    "Booking Information": "n/a",
    "Format": "Temporary Exhibition",
    "Audience": "All Ages"

},{

    "Event": "Bealtaine: May Flowers",
    "Start Date": "1st May 2015",
    "Finish Date": "1st May 2015",
    "Time": "2pm-3:30pm",
    "Location": "Country Life",
    "Description": "Find out how flowers were used to welcome the Summer long ago. Learn about traditional May Day customs with curator Clodagh Doyle. Create your own paper flowers to make a May posie with Aoife O'Toole.",
    "Booking Information": "Booking required",
    "Format": "Workshop",
    "Audience": "Adults"


},{
    "Event": "Féile na Tuaithe 2015: Free Family Festival",
    "Start Date": "23rd May 2015",
    "Finish Date": "24th May 2015",
    "Time": "12pm-5pm",
    "Location": "Country Life",
    "Description": "Enjoy a great family day out, perfect for all ages! Stop by our new Family Area for weaving, drumming, mosaic-making, puppet shows, storytelling, facepainting, and look at donkeys, goats and birds of prey. Visit our Craft and Food Villages and the Entertainment Stage for the best sites, sounds, and tastes in Traditional and Contemporary Ireland, complete with demonstrators and performers of international acclaim. Stroll through the Museum galleries and grounds on scarecrow and fairy trails. There is so much to do that you will need to return both days! ",
    "Booking Information": "See www.museum.ie for Saturday and Sunday's full listings.",
    "Format": "Open Day",
    "Audience": "Families"



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



