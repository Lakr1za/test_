document.addEventListener('DOMContentLoaded', function() {

  // Open popup
  document.querySelector(".btn").addEventListener("click", function () {
      document.querySelector(".popup").classList.add("active");
      document.documentElement.classList.add("hidden");
    });
    
    // Close popup when clicking on button
     document.querySelector(".close").addEventListener("click", function () {
       document.querySelector(".popup").classList.remove("active");
       document.documentElement.classList.remove("hidden");
     });
    
    // Close menu when clicking outside the element area
    // document.addEventListener("click", (e) => {
    //   const withinBoundaries =
    //     e.composedPath().includes(document.querySelector(".inner")) ||
    //     e.composedPath().includes(document.querySelector(".btn")) ||
    //     e.composedPath().includes(document.querySelector(".close"));
    
    //   if (!withinBoundaries) {
    //     document.querySelector(".popup").classList.remove("active");
    //   }
    // });
    
    var swiperReview = new Swiper('.swiper-review', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var count = 1;
    $('.mobile div').on('click', function () {
        $('.mobile div').toggleClass('active');

        if (count % 2 === 0) {
            $('.mobile div span').removeClass("backgr-white").addClass("backgr-black");
            count++;
        } else {
            $('.mobile div span').removeClass("backgr-black").addClass("backgr-white");
            count++;
        } // $('.mobile div span').addClass('backgr-white');


        $('.mobile nav').toggleClass('open');
        $('.mobile nav ul').toggleClass('show');
    });

    $('.mobile nav ul').on('click', function () {
        $('.mobile div').toggleClass('active');
        $('.mobile nav').removeClass('open');
        // $('.mobile nav ul').removeClass('open');
    });

});

// var form = $('#inner');

// form.on('submit', function (evt) {
//   evt.preventDefault();

//   $.ajax({
//     type: 'POST',
//     url: '/send.php',
//     data: $(this).serialize()
//   }).done(function (response) {
//     console.log(response);
//     alert('Ваша заявка успешно отправлена!');
//     form.html('<h2>Спасибо за заявку!</h2>');
//   });
// });

var form = document.querySelector('#myForm');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var formData = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value
  };

  var request = new XMLHttpRequest();

  request.addEventListener('load', function() {
    // В этой части кода можно обрабатывать ответ от сервера
    console.log(request.response);
    alert('Ваша заявка успешно отправлена!');
    form.innerHTML = '<h2 style="color:black;text-align:center;">Thank you for reserving!</h2>';
  });

  request.open('POST', '/send.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&email=' + encodeURIComponent(formData.email));
});