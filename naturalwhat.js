//assuming this comes from an ajax call
var info = [{


    "Event": "Lunch-time Talk: You Talking to Me?",
    "Start Date": "6th April 2015",
    "Finish Date": "6th April 2015",
    "Time": "1am-1.45pm",
    "Location": "Natural History",
    "Description": "Whether it is finding a mate or deterring a predator, animals have evolved a variety of methods of communicating, from the familiar visual or auditory to the unusual seismic or thermal to the downright bizarre such as dance! Join zoologist Donal Vaughan to discover more about the world of animal communication.",
    "Booking Information": "Booking required, email educationarch@museum.ie or call 01 648 6332.",
    "Format": "Talk",
    "Audience": "Adults"


},{

    "Event": "Native Species Weekend at Dublin Zoo",
    "Start Date": "23rd April 2015",
    "Finish Date": "24th April 2015",
    "Time": "See www.dublinzoo.ie",
    "Location": "Natural History",
    "Description": "Join us at our stand at Dublin Zoo as we celebrate Native Species Weekend.",
    "Booking Information": "For information on entry fees and times, please see the Dublin Zoo website www.dublinzoo.ie.",
    "Format": "Family Event",
    "Audience": "Families"





},{
     "Event": "Shark",
    "Start Date": "23rd April 2015",
    "Finish Date": "24th April 2015",
    "Time": "See www.dublinzoo.ie",
    "Location": "Natural History",
    "Description": "Join us at our stand at Dublin Zoo as we celebrate Native Species Weekend.",
    "Booking Information": "For information on entry fees and times, please see the Dublin Zoo website www.dublinzoo.ie.",
    "Format": "Family Event",
    "Audience": "Families"
 
    
}];



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



