//assuming this comes from an ajax call
var info = [{

    "Event": "Hands on History",
    "Start Date": "12th April 2015",
    "Finish Date": "12th April 2015",
    "Location": "Decorative Arts & History",
    "Description": "A chance to explore some of the artefacts from the Museum's collection of objects",
    "Format": "Temporary Exhibition",
    "Audience": "All ages"

},{

    "Event": "Sharks",
    "Start Date": "18th May 2015",
    "Finish Date": "18th May 2016",
    "Location": "Natural History",
    "Description": "Discover the world of sharks",
    "Format": "Permanent Exhibition",
    "Audience": "Family"



},{

    "Event": "History of Sharks",
    "Start Date": "18th May 2015",
    "Finish Date": "18th May 2016",
    "Location": "Natural History",
    "Description": "Discover the world of sharks",
    "Format": "Permanent Exhibition",
    "Audience": "Family"



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

