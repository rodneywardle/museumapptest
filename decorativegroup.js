//assuming this comes from an ajax call
var info = [{

    "Event": "Hands on History",
    "Start Date": "12th April 2015",
    "Finish Date": "12th April 2015",
    "Time":"3-4pm",
    "Location": "Decorative Arts & History",
    "Description": "A chance to explore some of the artefacts from the Museum's collection of objects",
    "Booking Information":"No booking required",
    "Format": "Drop-in Activity",
    "Audience": "All ages"

},{

    "Event": "Exhibition Tour: Military aspects of the 1916 Rising",
    "Start Date": "26th April 2015",
    "Finish Date": "26th April 2015",
    "Time":"3-4pm",
    "Location": "Decorative Arts & History",
    "Description": "Join Lar Joye, curator of the 'Soldiers & Chiefs'in an illustrated talk which will explore the Rising In military terms. ",
    "Booking Information":"No booking required, places allocated on a first-come basis 15 minutes before talk starts",
    "Format": "Talk",
    "Audience": "Adults &  young people 14yrs+  "
},{

    "Event": "Artists Tour: A journey with Emmet Kane",
    "Start Date": "3rd May 2015",
    "Finish Date": "3rd May 2015",
    "Time":"3-3.30pm",
    "Location": "Decorative Arts & History",
    "Description": "A chance to tour the new exhibition, 'A Journey: Twenty Seven Years of the work of Irish",
    "Booking Information":"Booking essential, admission free",
    "Format": "Talk",
    "Audience": "Adults &  young people 14yrs+"


}, {

    "Event": "Public Tour of 'Recovered Voices'",
    "Start Date": "10rd May 2015",
    "Finish Date": "10rd May 2015",
    "Time": "3-4pm",
    "Location": "Decorative Arts & History",
    "Description": "Join Lar Joye, curator of 'Recovered Voices: Stories of the Irish at War 1914 - 1915' on a personal tour of this recently launched exhibition.",
    "Booking Information": "No booking required, places allocated on a first-come basis 15 minutes before talk starts",
    "Format": "Tour",
    "Audience": "Adults &  young people 14yrs+"


},{


    "Event": "National Drawing Day",
    "Start Date": "16th May 2015",
    "Finish Date": "16th May 2015",
    "Time": "2-3pm",
    "Location": "Decorative Arts & History",
    "Description": "Drop in to Collins Barracks on National Drawing Day to discover what a source of inspiration the Museum can be for budding artists and designers of all ages. There's a free Drawing Day Pack you can pick up at the Museum's reception. Pencils are provided by the Museum, but bring along any other materials and sketchbooks you'll need.",
    "Booking Information": "Drop in event, no booking required.",
    "Format": "Drop-in Activity",
    "Audience": "Families with Children 7 yrs+"


},{
    "Event": "Hands on History",
    "Start Date": "17th May 2015",
    "Finish Date": "17th May 2015",
    "Time": "3-4pm",
    "Location": "Decorative Arts & History",
    "Description": "A chance to explore some of the artefacts from the Museum's collection of objects for handling with Museum educators - a fascinating drop-in handling session for all ages.",
    "Booking Information": "No booking required.",
    "Format": "Drop-in Activity",
    "Audience": "All Ages"



},{

    "Event": "'Universal Design' - what is it and how can it address ageing?",
    "Start Date": "24th May 2015",
    "Finish Date": "24th May 2015",
    "Time": "2-3pm",
    "Location": "Decorative Arts & History",
    "Description": "Join Enable Ireland and Bernard Timmins, Lecturer in Manufacturing & Design at the Dublin Institute of Technology in this participative event. The focus will be on the design of everyday household objects and how their design can be improved to match the needs of older users.",
    "Booking Information": "Booking essential, admission free.",
    "Format": "Talk",
    "Audience": "Adults"


},{


    "Event": "Tour of the Conservation Studios",
    "Start Date": "28th May 2015",
    "Finish Date": "28th May 2015",
    "Time": "2.30-4pm",
    "Location": "Decorative Arts & History",
    "Description": "A great opportunity to get behind the scenes at the Museum to meet Museum conservators and look at some of their current conservation projects",
    "Booking Information": "Admission free, booking essential.",
    "Format": "Tour",
    "Audience": "Adults"



},{

    "Event": "Public Tour of Recovered Voices",
    "Start Date": "29th May 2015",
    "Finish Date": "29th May 2015",
    "Time": "12-1pm",
    "Location": "Decorative Arts & History",
    "Description": "Join Lar Joye, curator of 'Recovered Voices: Stories of the Irish at War 1914 - 1915' on a personal tour of this recently launched exhibitio",
    "Booking Information": "No booking required, places allocated on a first-come basis 15 minutes before talk starts.",
    "Format": "Tour",
    "Audience": "Adults & Young People 14yrs +"


},{
    "Event": "Public Tour: Eat, drink and be merry!",
    "Start Date": "31st May 2015",
    "Finish Date": "31st May 2015",
    "Time": "3-3.45pm",
    "Location": "Decorative Arts & History",
    "Description": "How did they serve curdled milk and pass around the sweets? Take a look at lavish silver and dining room 'essentials' on this gallery tour with Museum educator Edith Andrees to find out what and how people ate and drank in 19th century Ireland",
    "Booking Information": "No booking required, places are allocated on a first-come basis 15 minutes before tour starts.",
    "Format": "Tour",
    "Audience": "Adults & Young People 14yrs +"



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
