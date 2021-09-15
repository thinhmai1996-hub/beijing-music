$(document).ready(() => {
    var btnCart = $('#btn-cart');
    var itemCart = $('.shopping-cart');
    var linkCart = btnCart.data('link');

    if (itemCart.hasClass('active')) {
        itemCart.removeClass('active');
    }

    itemCart.each(function () {
        var delay = $(this).index() * 50 + 'ms';
        $(this).css({
            '-webkit-transition-delay': delay,
            '-moz-transition-delay': delay,
            '-o-transition-delay': delay,
            'transition-delay': delay,
        });
    });

    btnCart.on('click', function (e) {
        e.stopPropagation();
        if ($(window).width() < 767) {
            window.location.href = linkCart;
            itemCart.addClass('d-none');
        } else {
            itemCart.toggleClass('active');
        }
    });
});

var _login = $('#kt_login');

    var _showForm = function (form) {
      var cls = 'login-' + form + '-on';
      var form = 'kt_login_' + form + '_form';

      _login.removeClass('login-signin-on');
      _login.removeClass('login-info-on');

      _login.addClass(cls);
      $('#' + form).addClass('animate__animated animate__backInUp ') 
    };

    $('#kt_login_signin').on('click', function (e) {
      e.preventDefault();
      _showForm('info');
    });