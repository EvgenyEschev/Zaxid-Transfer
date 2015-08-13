$('#mainNav').affix({
	offset: {
		top: 200
	}
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
$(document).ready(function(){
	width = $(window).width();
	if(width > 480)
	{
		$("#mainNav, #scrollAnimation").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-50}, 500);
		});
	}
});
$(document).ready(function(){
// Initialize WOW.js Scrolling Animations
    new WOW().init();
});

