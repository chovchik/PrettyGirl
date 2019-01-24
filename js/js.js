 $(document).ready(function(){

  	if ($('.slider__content').length) {
  		$('.slider__content').slick({
  			autoplay: true,
	       dots: true,
	       arrows: false,
	  	});
  	}

	 $('.skills__diagram').waypoint(function(e, direction){
        $(this['element']).each(function(index, el) {
            if ($('.diagram__background').length) {
				$('.diagram__background').each(function(e){
					var fill = parseInt($(this).attr('data-fill'), 10);
					$(this).css('width', fill + '%');
				});
		}
	})
    }, {offset: '90%'});

  	


});

 function countup(className){
		var countBlockTop = $("."+className).offset().top;
		var windowHeight = window.innerHeight;
		var show = true;
					
		$(window).scroll( function (){
			if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
				show = false;
						
				$('.'+className).spincrement({
					from: 1,
					duration: 4000,
				});
			}
		})	
	}

	
        $(function() { 
		countup("count1", $(".count1").text());
		countup("count2", $(".count2").text());
		countup("count3", $(".count3").text());
		countup("count4", $(".count4").text());
        });


$('.open-button').click(function() 
{
        if(!$('.menu-button').hasClass('open-done'))
        {
            $('.menu-button').addClass('open-done');
            $('.menu-block-1').addClass('open-done');
            $('.menu__line').fadeOut(200);
            $('body').css('overflow', 'hidden');
            setTimeout(function(){$('.menu-block-2').addClass('open-done')}, 100);
            setTimeout(function(){$('.menu-link-1').addClass('open-done')}, 500);
            setTimeout(function(){$('.menu-link-2').addClass('open-done')}, 600);
            setTimeout(function(){$('.menu-link-3').addClass('open-done')}, 700);
            setTimeout(function(){$('.menu-link-4').addClass('open-done')}, 800);
            setTimeout(function(){$('.menu-link-5').addClass('open-done')}, 1000);
        }
        else
        {
            $('.menu-button').removeClass('open-done');
            $('.menu-link-1').removeClass('open-done');
            $('.menu__line').fadeIn(500);
            $('body').css('overflow', 'visible');
            setTimeout(function(){$('.menu-link-2').removeClass('open-done')}, 100);
            setTimeout(function(){$('.menu-link-3').removeClass('open-done')}, 200);
            setTimeout(function(){$('.menu-link-4').removeClass('open-done')}, 300);
            setTimeout(function(){$('.menu-link-5').removeClass('open-done')}, 400);
            setTimeout(function(){$('.menu-block-1').removeClass('open-done')}, 800);
            setTimeout(function(){$('.menu-block-2').removeClass('open-done')}, 600);
        }
});

$('#js__works-btn').on('click', function(e) {
      $('#more__images').slideToggle(function() {
        $(e.target).text($(this).is(':visible') ? 'none' : 'more');
      });
});

$('#js__news-btn').on('click', function(e) {
      $('#more__post').slideToggle(function() {
        $(e.target).text($(this).is(':visible') ? 'none' : 'more');
      });
});
  	