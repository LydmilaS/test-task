(function ($) {
  $.fn.slider = function( options ) {  

    var Slider = function(options, element) {
      $.extend(this.options, options);
      this.$el = $(element);
      this.$slides = this.$el.find('.slider-item').get();
      this.positionsSlide();
      this.leftClickAction();
      this.rightClickAction();
    };

     Slider.prototype.options = {
            duration: 400,
            slidesContainer: '.slider',
            leftArrowNav: '.prev',
            rightArrowNav: '.next'
        };

        Slider.prototype.leftClickAction = function() {
            $(this.options.leftArrowNav).one(
                'click', function() {

                });
        };

        Slider.prototype.rightClickAction = function() {
            $(this.options.rightArrowNav).one(
                'click', function() {
                  
                });
        };
    return this.each(function() {        

      new Slider(options, this);
    });
  };
  return this;
})(jQuery);