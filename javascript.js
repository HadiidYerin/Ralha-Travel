//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});
  
  $(document).ready(function() {
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);  // 500ms smooth scrolling
    });
  });
  
  $("#tombol").click(function () {
    $("#menu").toggleClass("aktif");
  });

  // Scroll to booking form when "BOOK A TICKET" button is clicked
  $('#book-ticket').click(function() {
    $('html, body').animate({
        scrollTop: $('#flights').offset().top
    }, 500);
  });