document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired');

  let slideIndex = 0;
  let slides = document.getElementsByClassName("mySlides");
  let startX = 0;
  let endX = 0;

  showSlides();

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    if (slides[slideIndex-1]) {
      slides[slideIndex-1].style.display = "block";  
    }
    setTimeout(showSlides, 7000); // Change slide every 5 seconds
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('touchstart', touchStart);
    slides[i].addEventListener('touchmove', touchMove);
    slides[i].addEventListener('touchend', touchEnd);
  }

  function touchStart(event) {
    startX = event.touches[0].clientX;
  }

  // rest of your code...

  document.getElementById('NeilBishop').addEventListener('click', function() {
    console.log('Image clicked');
    var bio = document.getElementById('NeilBishopBio').innerHTML;
    document.getElementById('lightbox-content').innerHTML = bio;
    document.getElementById('lightbox').style.display = 'flex';
  });

  document.getElementById('lightbox-close').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
  });
});
document.getElementById('RobWhitehouse').addEventListener('click', function() {
  var bio = document.getElementById('RobWhitehouseBio').innerHTML;
  document.getElementById('lightbox-content').innerHTML = bio;
  document.getElementById('lightbox').style.display = 'flex';
});
document.getElementById('DaveDeluce').addEventListener('click', function() {
  var bio = document.getElementById('DaveDeluceBio').innerHTML;
  document.getElementById('lightbox-content').innerHTML = bio;
  document.getElementById('lightbox').style.display = 'flex';
});
document.getElementById('ZachCulmer').addEventListener('click', function() {
  var bio = document.getElementById('ZachCulmerBio').innerHTML;
  document.getElementById('lightbox-content').innerHTML = bio;
  document.getElementById('lightbox').style.display = 'flex';
});
document.getElementById('AbbeeLozecki').addEventListener('click', function() {
  var bio = document.getElementById('AbbeeLozeckiBio').innerHTML;
  document.getElementById('lightbox-content').innerHTML = bio;
  document.getElementById('lightbox').style.display = 'flex';
});
//FOR THE LIGHTBOX IN THE KICKBOXING PAGE
