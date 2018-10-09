﻿/*$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $(".slider .slides").children(".slide"); // Получаем массив всех слайдов
	var width = $(".slider .slides").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	var cheki = i-1;
	
	$(".slider .slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	for (j=0; j < slides.length; j++) {
		if (j==0) {
			$(".slider .navigation").append("<div class='dot active'></div>");
		}
		else {
			$(".slider .navigation").append("<div class='dot'></div>");
		}
	}
	
	var dots = $(".slider .navigation").children(".dot");
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	i = 0; // Обнуляем номер текущего слайда
	
	$('.slider .navigation .dot').click(function(){
		$(".slider .navigation .active").removeClass("active");								  
		$(this).addClass("active");
		i = $(this).index();
		offset = i * width;
		$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	});
	
	
	$("body .slider .next").click(function(){	// Событие клика на кнопку "следующий слайд"
		if (offset < width * cheki) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
			$(".slider .navigation .active").removeClass("active");	
			$(dots[++i]).addClass("active");
		}
	});


	$("body .slider .prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущегоо слайда
			$(".slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
			$(".slider .navigation .active").removeClass("active");	
			$(dots[--i]).addClass("active");
		}
	});

});*/


var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}