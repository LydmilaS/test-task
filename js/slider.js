(function ($) {
    
  $.fn.slider = function( options ) {  
    
    var Slider = function(options, wrapper) {
      $.extend(this.options, options);
      this.$wrap = $(wrapper);
      this.$slides = this.$wrap.find('.slider-item').get();
      this.leftClickAction();
      this.rightClickAction();
    };

    //значения по умолчанию
    Slider.prototype.options = {
      duration: 400,
      slidesContainer: '.slider',
      leftArrowNav: '.prev',
      rightArrowNav: '.next'
    };

    Slider.prototype.leftClickAction = function(event) {
     var width = $(window).width();
     var i = $(".slider-item").size();
       $(this.$slides).hide();
       $(".slider-item.active").show();
        $(this.options.leftArrowNav).one('click', function() {
          var n = 1;
          if (n < i) {
            $(".slider-item").animate({right: width});
            n++;
          } else {
            n = 1;
          }
        }); 
    };

    Slider.prototype.rightClickAction = function() {
      var width = $(window).width();
      $(this.options.rightArrowNav).one('click', function() {
        $(".slider-item").animate({left: width});
      });     
    };

    return this.each(function() {        
      new Slider(options, this);
    });
  };
  return this;
})(jQuery);

