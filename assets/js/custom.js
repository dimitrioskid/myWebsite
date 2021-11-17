//Navbar Show/Hide
$(document).ready(function() {
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 550) {
            $(".navbar").removeClass("d-none");

        } else {
            $(".navbar").addClass("d-none");
        }
    });
});

//Scroll To The Top Function
function topFunction() {
    document.documentElement.scrollTop = 0;
};
//displaying button Top
function scrollFunction() {
    if (document.body.scrollTop > 560 || document.documentElement.scrollTop > 560) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//CounterUp
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 50,
        time: 2000
    });
});

// Loader
$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);

});

$(document).ready(function() {
    setTimeout(function() {
        $("#logo").fadeOut();
    }, 2800);
});