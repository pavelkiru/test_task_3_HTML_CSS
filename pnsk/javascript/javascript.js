var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";


}
showSlides1();

function showSlides1() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none"; 

    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides1, 5000);
}


/*popup\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\*/

var btn = document.getElementById('open'), 
    modal = document.querySelector('.modal'), 
    closeBtn = document.querySelector('.closeBtn'), 
    close = document.getElementById('close');


btn.addEventListener('click', function() {   
    modal.style.display = 'block'; 
})

closeBtn.addEventListener('click', function () {
  modal.style.display = "none";
})

close.addEventListener('click', function () {
  modal.style.display = "none";
})

window.addEventListener('click', function (e) {
  if(e.target == modal) {
      modal.style.display = "none";
  }   
})




