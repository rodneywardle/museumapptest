//assuming this comes from an ajax call
var info = [{




    "Event": "Kids Museum: Who's Fooling Who Tour?",
    "Start Date": "1st April 2015",
    "Finish Date": "1st April 2015",
    "Time": "2-3pm",
    "Location": "Country Life",
    "Description": "This is the one day you shouldn't believe everything you hear! Can you tell who's giving you the facts and who is giving you the run-around on this April Fools tour of the Country Life collection.",
    "Booking Information": "  Booking required.",
    "Format": "Tour",
    "Audience": "Families"





},{
    "Event": "Kids Museum: Easter Painting Eggstravaganza!",
    "Start Date": "2nd April 2015",
    "Finish Date": "2nd April 2015",
    "Time": "2-3pm",
    "Location": "Country Life",
    "Description": "Hear about Easter traditions long ago when chocolate eggs were rare! Learn how to design and decorate your own Easter egg.",
    "Booking Information": "No Booking required.",
    "Format": "Drop-in Activity",
    "Audience": "Families"



},{

    "Event": "Mayo Genealogy Group",
    "Start Date": "11th April 2015",
    "Finish Date": "11th April 2015",
    "Time": "11:30am - 1pm",
    "Location": "Country Life",
    "Description": "If you have an interest in finding out about your family history come along for free practical tips with the Mayo Genealogy Group..",
    "Booking Information": "No Booking required. New researchers welcome.",
    "Format": "Drop-in Activity",
    "Audience": "Adults"


},{

    "Event": "Craft: Keep Calm and Cast On!",
    "Start Date": "1st May 2015",
    "Finish Date": "1st May 2015",
    "Time": "11am-1pm",
    "Location": "Country Life",
    "Description": "If you have an interest in finding out about your family history come along for free practical tips with the Mayo Genealogy Group..",
    "Booking Information": "No Booking required.",
    "Format": "Drop-in Activity",
    "Audience": "Adults & Children 7yrs+"





},{


    "Event": "May Altars, Queens, Poles and Flowers",
    "Start Date": "1st May 2015",
    "Finish Date": "31st May 2015",
    "Time": "n/a",
    "Location": "Country Life",
    "Description": "Do you know of any customs still being carried out on May Eve, May Day or during the month of May? To register your local customs on our national survey visit www.ouririshheritage.org and follow the link on the home page.",
    "Booking Information": "No Booking required.",
    "Format": "Various",
    "Audience": "All ages"

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
