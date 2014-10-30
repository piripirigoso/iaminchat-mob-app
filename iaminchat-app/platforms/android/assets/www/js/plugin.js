(function ($) {

  $.fn.shareButtons = function (url, options) {

    // The URL is optional. If it is omitted, the plugin
    // will use the URL of the current page.

    if(typeof url === 'object') {
      options = url;
      url = window.location.href;
    }

    options = $.extend({
      twitter : false,
      facebook : false,
      googlePlus : false
    }, options);


    var url_encoded = encodeURIComponent(url);


    // The URLs of the share pages for the supported services

    var shareURLs = {
      'twitter' : 'hello.html',
      // 'twitter' : 'https://www.iaminchat.com/auth/twitter/',
      'facebook' : 'https://www.iaminchat.com/auth/facebook/',
      'googlePlus' : 'https://www.iaminchat.com/auth/google_oauth2/'
    };


    // The plugin supports multiple share buttons on the page.
    // Here we loop the supplied elements and initialize it.

    this.each(function(i){

      var elem = $(this);

      elem.addClass('socialPlugin');
      elem.append('<span class="socials"></span>');

      var socialButtonsPopUp = elem.find('.socials');

      if(options.facebook){
        socialButtonsPopUp.append($('<a class="fa fa-facebook" href="' + shareURLs.facebook +  '" ></a>'));
      }

      if(options.twitter){
        socialButtonsPopUp.append($('<a class="fa fa-twitter" href="' + shareURLs.twitter + '" ></a>'));
      }

      if(options.googlePlus){
        socialButtonsPopUp.append($('<a class="fa fa-google-plus" href="' + shareURLs.googlePlus +  '" ></a>'));
      }


    });

    var socials = $('.socialPlugin .socials'),
      socialLength = socials.find('a').length,
      marginLeft = '-35';

    socials.width(socialLength * 110).css({'margin-left': marginLeft - ((socialLength-1) * 55)});

    $('.socialPlugin a').click(function(e) {

      e.preventDefault();

      var url = this.href;

      window.location.href = url;
    });

    // Enable chaining

    return this;
  };

})(jQuery);
