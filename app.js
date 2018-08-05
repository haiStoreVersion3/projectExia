function scrollFooter(scrollY, heightFooter)
{
    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });
        scrollFooter(scroll, footerHeight);
    }
});

app = {
  init: () => {
      // app.fetch();
      $('#submitButton').on('submit', (e) => {
          e.preventDefault();
          app.send($('#input').val())
          // console.log($('#input').val())
      })
  },
  send: (data) => {
      $.ajax({
          url: '/',
          type: 'POST',
          contentType: 'application/json',
          crossDomain: true,
          data: data,
          success: (returned) => {
              console.log('success, sent!');
              app.parseResponse(returned);
          },
          error: (data) => {
              console.error('failed to send');
          }
      })
  }
}