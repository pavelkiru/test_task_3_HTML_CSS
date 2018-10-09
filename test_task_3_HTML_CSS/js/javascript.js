window.onload = function () {

	var slides = $("#slider .slides").children(".slide"); // Получаем массив всех слайдов
	var width = $("#slider .slides").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	var cheki = i-1;
	
	$("#slider .slides").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	for (j=0; j < slides.length; j++) {
		if (j==0) {
			$("#slider .navigation").append("<div class='dot active'></div>");
		}
		else {
			$("#slider .navigation").append("<div class='dot'></div>");
		}
	}
	
	var dots = $("#slider .navigation").children(".dot");
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	i = 0; // Обнуляем номер текущего слайда
	
	$('#slider .navigation .dot').click(function(){
		$("#slider .navigation .active").removeClass("active");								  
		$(this).addClass("active");
		i = $(this).index();
		offset = i * width;
		$("#slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
	});
	
	
	$("body #slider .next").click(function(){	// Событие клика на кнопку "следующий слайд"
		if (offset < width * cheki) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$("#slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
			$("#slider .navigation .active").removeClass("active");	
			$(dots[++i]).addClass("active");
		}
	});


	$("body #slider .prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущегоо слайда
			$("#slider .slides").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
			$("#slider .navigation .active").removeClass("active");	
			$(dots[--i]).addClass("active");
		}
	});











	document.querySelector('.tabs-header').addEventListener('click', fTabs);


	function fTabs (event) {
		console.log(event);
		if (event.target.className == 'tab-h') {
			var dataTab = event.target.getAttribute('data-tab');

			var tabH = document.getElementsByClassName('tab-h');
			for (var i = 0; i < tabH.length; i++) {
				tabH[i].classList.remove('active');
			}

			event.target.classList.add('active');

			var tabBody = document.getElementsByClassName('tab-b');
			for (var i = 0; i < tabBody.length; i++) {
				if (dataTab == i) {
					tabBody[i].style.display = 'block';
				}
				else {
					tabBody[i].style.display = 'none';
				}
			}
		} 
	}









/*слайдер вкладка \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

	document.getElementById('slider-left').onclick = sliderLeft;
	var left = 0;

	function sliderLeft() {
		var polosa = document.getElementById('tabs-body__polosa');
		left = left - 466;
		if (left < -1398) {
			left = 0;	
		}	
		polosa.style.left = left+'px';
	}

	document.getElementById('slider-right').onclick = sliderRight;
	var right = 0;

	function sliderRight() {
		var polosa = document.getElementById('tabs-body__polosa');
		left = left + 466;
		if (left > 0) {
		left = -1398;
		}
		polosa.style.left = left +'px';
	}


	document.getElementById('slider-left-2').onclick = sliderLeft2;
	var left = 0;

	function sliderLeft2() {
		var polosa = document.getElementById('tabs-body__polosa-2');
		left = left - 466;
		if (left < -1398) {
			left = 0;
		}		
		polosa.style.left = left+'px';
	}

	document.getElementById('slider-right-2').onclick = sliderRight2;
	var right = 0;

	function sliderRight2() {
		var polosa = document.getElementById('tabs-body__polosa-2');
		left = left + 466;
		if (left > 0) {
		left = -1398;
		}
		polosa.style.left = left +'px';
	}








/*popup юзера\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

	$('.show_popup').click(function() {    
    	$('#popup1').show(500);
    	$('.overlay_popup').show(500);
	});

	$('.overlay_popup').click(function() {
    	$('.overlay_popup').hide(500);
    	$('#popup1').hide(500);
	});
 
	$('.popup_button').click(function() {
    	$('.overlay_popup').hide(500);
    	$('#popup1').hide(500);
	});



/*popup поиска\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

	$('.show_popup2').click(function() {    
    	$('#popup2').show(500);
    	$('.overlay_popup2').show(500);
	});

	$('.overlay_popup2').click(function() {
    	$('.overlay_popup2').hide(500);
    	$('#popup2').hide(500);
	});
 
	$('.popup_button').click(function() {
    	$('.overlay_popup2').hide(500);
    	$('#popup2').hide(500);
	});


/*бургер меню*/


 $('.header_menu').click(function() {
    $('.header_menu_ul').slideToggle(500);
  });

  $(window).resize(function() {		
		if (  $(window).width() > 850 ) {			
			$('.header_menu_ul').removeAttr('style');
		 }
	});


}
