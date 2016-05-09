(function ($) {
     $.fn.slider = function( options ) {  

    // Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
    var settings = $.extend( {
     		duration: 300,
            slidesContainer: '.slider',
            outsideMargin: 200
    }, options);

    return this.each(function() {        

      // код плагина slider

    });

  };
})(jQuery);