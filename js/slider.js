(function ($) {
     $.fn.slider = function( options ) {  

    // Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
    var settings = $.extend( {
    		wrapper: '.slider',
     		duration: 300,
            slidesContainer: '.slider-item',
            outsideMargin: 200,
            previous: '.prev',
            next: '.next',
            speed: 500,
			easing: "linear"
    }, options);

    return this.each(function() {        

      // код плагина slider

    });

  };
})(jQuery);