(function ($) {
    
  $.fn.slider = function( options ) {  
    
    var Slider = function(options, wrapper) {
      $.extend(this.options, options);
      this.leftClickAction();
      this.rightClickAction();
    };

    //значения по умолчанию
    Slider.prototype.options = {
      duration: 400,
      slidesContainer: '.slider',
      sliderCount: '.slider-item',
      leftArrowNav: '.prev',
      rightArrowNav: '.next'
    };

    Slider.prototype.leftClickAction = function() {
      var currentIndex = 0, 
        width = $(window).width(), // width device
        items = $(this.options.sliderCount),
        itemsSize = items.size(), // 4
        item = $(this.options.sliderCount).eq(currentIndex), 
        thatDuration = $(this.options.duration);

        $(this.options.leftArrowNav).click( function() {

          currentIndex -=1;

          if (currentIndex < 0) {
              currentIndex = itemsSize -1;
            }

            $(item).animate({right: width}, {duration: thatDuration}); 
            var item = $('.slider-item').eq(currentIndex);
              items.hide();
              item.css('display','inline-block');      
        }); 
    };

    Slider.prototype.rightClickAction = function() {
      var currentIndex = 0, 
        width = $(window).width(), // width device
        items = $(this.options.sliderCount),
        itemsSize = items.size(), // 4
        item = $(this.options.sliderCount).eq(currentIndex);  

      $(this.options.rightArrowNav).click(function() {

        currentIndex += 1;
          
        if (currentIndex > itemsSize - 1) {
          currentIndex = 0;
        }

        $(item).animate({left: width}); 
          var item = $('.slider-item').eq(currentIndex);
            items.hide();
            item.css('display','inline-block');
      });     
    };

    return this.each(function() {        
      new Slider(options, this);
    });
  };
  return this;
})(jQuery);

