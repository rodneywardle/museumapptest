//assuming this comes from an ajax call
var info = [{




    "Event": "Teddy Bear Tour",
    "Start Date": "11th April 2015",
    "Finish Date": "11th April 2015",
    "Time": "10.30-11.15am, 12-12.45pm",
    "Location": "Natural History",
    "Description": "Learn more with zoologist Catherine McGuiness about animals that are usually made into cuddly toys, but they're not all friendly in real life. Don't forget to bring your own favourite Teddy Bear!",
    "Booking Information": " No booking required. Places are limited and are allocated on a first come basis. Not wheelchair accessible.",
    "Format": "Tour",
    "Audience": "Families"




},{



    "Event": "Lunch-time Talk: You Talking to Me?",
    "Start Date": "6th May 2015",
    "Finish Date": "6th May 2015",
    "Time": "1-1.45pm",
    "Location": "Natural History",
    "Description": "Whether it is finding a mate or deterring a predator, animals have evolved a variety of methods of communicating, from the familiar visual or auditory to the unusual seismic or thermal to the downright bizarre such as dance! Join zoologist Donal Vaughan to discover more about the world of animal communication. ",
    "Booking Information": "  Booking required, email educationarch@museum.ie or call 01 648 6332.",
    "Format": "Talk",
    "Audience": "Adults"


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
