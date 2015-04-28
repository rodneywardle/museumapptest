//assuming this comes from an ajax call
var info = [{


    "Event": "Lunchtime Lecture: The Cross of Cong",
    "Start Date": "1st April 2015",
    "Finish Date": "1st April 2015",
    "Time": "1-1.45pm",
    "Location": "Archaeology",
    "Description": "One of Ireland's great national treasures, the Cross of Cong stands as the last masterpiece of Irish art from the early medieval period. Commissioned by the high king of Ireland, Turlough O'Connor, in the early 12th century, it was made to enshrine a relic of Christ's Cross. Join Dr. Griffin Murray of University College Cork to explore the art, archaeology, and history of the Cross, revealing some of its hidden secrets and stories.",
    "Booking Information": "Booking required, please phone 01 6486339 or email educationarch@museum.ie. Not wheelchair accessible.",
    "Format": "Lecture",
    "Audience": "Adults"





},{
    "Event": "Artefact Detective!",
    "Start Date": "9th April 2015",
    "Finish Date": "9th April 2015",
    "Time": "2-4pm",
    "Location": "Archaeology",
    "Description": "Think like an archaeologist for an afternoon and try to solve the puzzle of some mystery objects during this drop-in session!",
    "Booking Information": " Located next to the Treasury exhibition, ground floor. No booking required. Wheelchair accessible.",
    "Format": "Drop-in Activity",
    "Audience": "6yrs +"




},{



    "Event": "Artefact Detective!",
    "Start Date": "10th April 2015",
    "Finish Date": "10th April 2015",
    "Time": "2-4pm",
    "Location": "Archaeology",
    "Description": "Think like an archaeologist for an afternoon and try to solve the puzzle of some mystery objects during this drop-in session!",
    "Booking Information": " Located next to the Treasury exhibition, ground floor. No booking required. Wheelchair accessible.",
    "Format": "Drop-in Activity",
    "Audience": "6yrs +"

},{

    "Event": "Kingly Attire!",
    "Start Date": "25th May 2015",
    "Finish Date": "25th May 2015",
    "Time": "2-3pm",
    "Location": "Archaeology",
    "Description": "Drop-in and join Laura Fitzachary to explore Ireland at the time of Celtic Kings. Find out more about the mysterious bog bodies and what they may have worn to special ceremonies.",
    "Booking Information": " This event will take place in the Learning Resource Room, First Floor. No booking required. Not wheelchair accessible.",
    "Format": "Drop-in Activity",
    "Audience": "10yrs +"

},{

    "Event": "Bone Stories!",
    "Start Date": "30th May 2015",
    "Finish Date": "30th May 2015",
    "Time": "2-3pm",
    "Location": "Archaeology",
    "Description": "Drop in and join osteoarchaeologist Rebecca Martin to find out some fun and interesting facts about the many bones in the National Museum!",
    "Booking Information": " This event will take place in the Learning Resource Room, First Floor. No booking required. Not wheelchair accessible.",
    "Format": "Drop-in Activity",
    "Audience": "10yrs +"





}];











//pageinit event for first page
//triggers only once
//write all your on-load functions and event handlers pertaining to page1
$(document).on("pageinit", "#info-page", function () {


    //set up string for adding <li/>
    var li = "";
    //container for $li to be added
    $.each(info, function (i,Event) {
        //add the <li> to "li" variable
        //note the use of += in the variable
        //meaning I'm adding to the existing data. not replacing it.
        //store index value in array as id of the <a> tag
        li += '<li><a href="#" id="' + i + '" class="info-go">' + Event.Event + '</a></li>';
    });
    //append list to ul
    $("#prof-list").append(li).promise().done(function () {
        //wait for append to finish - thats why you use a promise()
        //done() will run after append is done
        //add the click event for the redirection to happen to #details-page
        $(this).on("click", ".info-go", function (e) {
            e.preventDefault();
            //store the information in the next page's data
            $("#details-page").data("info", info[this.id]);
            //change the page # to second page.
            //Now the URL in the address bar will read index.html#details-page
            //where #details-page is the "id" of the second page
            //we're gonna redirect to that now using changePage() method
            $.mobile.changePage("#details-page");
        });

        //refresh list to enhance its styling.
        $(this).listview("refresh");
    });
});

//use pagebeforeshow
//DONT USE PAGEINIT!
//the reason is you want this to happen every single time
//pageinit will happen only once
$(document).on("pagebeforeshow", "#details-page", function () {
    //get from data - you put this here when the "a" wa clicked in the previous page
    var info = $(this).data("info");
    //string to put HTML in
    var info_view = "";
    //use for..in to iterate through object
    for (var key in info) {
        //Im using grid layout here.
        //use any kind of layout you want.
        //key is the key of the property in the object
        //if obj = {name: 'k'}
        //key = name, value = k
        info_view += '<div class="ui-grid-a"><div class="ui-block-a"><div class="ui-bar field" style="font-weight : bold; text-align: left;">' + key + '</div></div><div class="ui-block-b"><div class="ui-bar value" style="width : 80%">' + info[key] + '</div></div></div>';
    }
    //add this to html
    $(this).find("[data-role=content]").html(info_view);
});/**
 * Created by rwardle on 21/04/2015.
 */
