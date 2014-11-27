jQuery(document).ready(function($) {

    var
        tmnews = $('.todays-month'),
        tdnews = $('.todays-date'),
        todaysdate = function(Tmonth, Tday){

            var d = new Date();
            var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "Mar";
            month[3] = "Apr";
            month[4] = "May";
            month[5] = "Jun";
            month[6] = "Jul";
            month[7] = "Aug";
            month[8] = "Sep";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";
            Tmonth = month[d.getMonth()];
            tmnews.html(Tmonth);

            Tday = d.getDate();
            tdnews.html(Tday);
    };
    todaysdate();

	'use strict';

		$(".our-listing").owlCarousel({
			items: 4,
			navigation: true,
			navigationText: ["&larr;","&rarr;"]
		});


		$('.flexslider').flexslider({
		    animation: "fade",
		    controlNav: false,
		    prevText: "&larr;",
		    nextText: "&rarr;"
		});

    $("#dynamic-header").load("/templates/dynamic-header.html", function () {

        $('.toggle-menu').click(function(){
            $('.menu-responsive').slideToggle();
            return false;
        });
    });

    $("#dynamic-footer").load("/templates/dynamic-footer.html");
    $("#dynamic-partners").load("/templates/dynamic-partners.html");
    $("#dynamic-latestnews").load("/templates/dynamic-latestnews.html");
    $("#generic-listings").load("/templates/generic-listings.html");

});









