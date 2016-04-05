
$(window).load(function() {



var $grid = $('.grid');

$grid.isotope({
  itemSelector: '.grid-item',
  // percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
});


//sticky sidebar

$(function() {

    var $sidebar   = $(".sidebar"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 20;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
    
});



//filter for categories and types at the same time


$('ul.filter-list li').click(function() {
	//define current as whatever is clicked in the li, the name of that is this
	var current = $(this).attr('name');
	//give the selected items the class of "active"
	$(this).toggleClass('active');
	//remove the active class from other "foodgroup" items when another one of them is clicked
	if ($(this).parent().hasClass('foodgroup-a')) {
		$(this).siblings().removeClass('active');
	}

	//if the current is all and all is clicked, everything shows
	// if (current === 'all') {
	// 	$grid.isotope({ filter: '*' });
	// 	//do not show the li with the id all initially
		// $('.all').hide();
	//otherwise filter the current so that the class with the same name as that of the id selected shows
	// } else {




		var filterTerms = [];
		// Find all the li's with the 'active' class and loop through them.
		$('li.active').each(function() {
			// Get the name attribute for each matched element and assign it to a "name" variable.
			var name = $(this).attr('name');
			// Add the name variable to the filter terms array. This way we have the names of every "active" element.
			filterTerms.push(name);
		});

		if ($(this).parent().hasClass('foodgroup')) {



		}	else { 


		}
		// Take all the filter terms and join them into a period-separated string (because isotope uses dots inbetween terms to use its filtering method).
		filterTerms = '.' + filterTerms.join('.');


		// If there are no filter terms (aka the strings have disappeared leaving a dot), just show all again
		if (filterTerms === '.') {
			$grid.isotope({ filter: '*' });
		} else {
		// If there are filter terms, add a preceding dot and send it along to isotope for filtering.
			$grid.isotope({ filter: filterTerms });
		}
		
		// //show the item with the class all as an inline block element
		// $('.all').css('display', 'inline-block');
});


		//show the li with the class all
		// $('.all').show();


// $(document).ready(function(){

	$(document).scroll(function () {
	    //stick nav to top of page
	    var y = $(this).scrollTop();
	    var height = $('.logo').height();
	    var heightOfNav = $('header').height();
	    var navWrap = $('.logo').first().offset().top + height - heightOfNav;
	    console.log('navWrap', navWrap);
	    if (y > navWrap) {
	    	console.log('fired');
	        $('.secretNav').addClass('sticky');
	    } else {
	        $('.secretNav').removeClass('sticky');
	    }
	});

});