//assuming this comes from an ajax call
var info = [{

    "Event": "Pals - The Irish at Gallipoli",
    "Start Date": "1st April 2015",
    "Finish Date": "31st April 2015",
    "Time": "During Museum opening hours",
    "Location": "Decorative Arts & History",
    "Description": "As part of the Museum's WW1 centenary programme, award-winning innovators ANU Productions present an immersive World War I experience, based on the events surrounding the campaign at Gallipoli in Turkey and inspired by the previously untold stories of the 7th Battalion of the Royal Irish Fusiliers and the everyday lives of the Irish people who were affected by the Great War. The project is a partnership between ANU Productions , the National Museum of Ireland and the Department of Arts, Heritage and Gaeltacht and is supported by the National Archives of Ireland. Performances will run Wednesday - Saturday: 11.00am, 12.00pm, 2.00pm, 3.00pm and 4.00pm Sunday - 2.00pm, 3.00pm and 4.00pm. Tickets: 5euro.",
    "Booking Information": "For More Information and Tickets: www.pals-theirishatgallipoli.com",
    "Format": "Performance",
    "Audience": "Adults"


},{

    "Event": "The Big Barracks Egg Hunt",
    "Start Date": "5th April 2015",
    "Finish Date": "5th April 2015",
    "Time": "3-4.30pm",
    "Location": "Decorative Arts & History",
    "Description": " Can you follow the trail and test your knowledge to find the golden egg? Complete the trail to receive an egg-cellent edible reward!",
    "Booking Information": "No booking required.",
    "Format": "Family Event",
    "Audience": "Families"



},{

    "Event": "The Easter Rising: Irish Volunteer Drills",
    "Start Date": "18th April 2015",
    "Finish Date": "18th April 2015",
    "Time": "2-4pm",
    "Location": "Decorative Arts & History",
    "Description": " Come along and see re-enactors practice drills as the Irish Volunteers did between 1913 and 1916. In the period before the 1916 Easter Rising the Irish Volunteers organised openly and trained in the use of rifles and military skills. See the uniforms and weapons used by the Volunteers and how they were taught to use them.",
    "Booking Information": "Clarke Square, no booking required.",
    "Format": "Historical Re-enactment",
    "Audience": "All ages"



},{


    "Event": "Seminar: Method and Form",
    "Start Date": "25th April 2015",
    "Finish Date": "25th April 2015",
    "Time": "2-4.pm",
    "Location": "Decorative Arts & History",
    "Description": "Marking Year of Irish Design 2015, and in partnership with the Dublin Decorative & Fine Arts Society, 'Method and Form' is an afternoon of talks exploring how past and present come together in contemporary Irish applied arts. Speakers include makers Zelouf and Bell, curator Dr Jennifer Goff (NMI) and Dr Audrey Whitty, Keeper of Art & Industry (NMI).",
    "Booking Information": "Go to www.museum.ie for a full programme.Booking essential. Tickets 5 euro.",
    "Format": "Historical Re-enactment",
    "Audience": "All ages"

},{


    "Event": "70th Anniversary of the end of World War Two",
    "Start Date": "6th June 2015",
    "Finish Date": "6th June 2015",
    "Time": "2-4.30pm",
    "Location": "Decorative Arts & History",
    "Description": "Come along and see uniforms and equipment used by the Allied (American, British, French, Soviet) and Axis (German, Italian) Forces during the Second World War. This is an interactive way of learning about this conflict which ended 70 years ago. Presented by historical re-enactors, The WW2 Club.",
    "Booking Information": "Clarke Square, no booking required.",
    "Format": "Historical Re-enactment",
    "Audience": "All ages"



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



