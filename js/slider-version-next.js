(function ($) {

  $.fn.slider = function (options) {
  
  var Slider = function (options, slidesContainer) {
    $.extend(this.options, options);
    this.$slidesContainer = $(slidesContainer);
    this.slides = {
      width: $(window).width(),
      items: $(this.options.sliderCount),
      itemsSize: $(this.options.sliderCount).size()
    };
    this.bindClickEvents();
  };

  //значения по умолчанию
  Slider.prototype.options = {
    duration: 400,
    slidesContainer: '.slider',
    sliderCount: '.slider-item',
    leftArrowNav: '.prev',
    rightArrowNav: '.next',
    activeSlide: '.active'
  };

  Slider.prototype.bindClickEvents = function () {
    $(this.options.leftArrowNav).click(this.click.bind(this));
    $(this.options.rightArrowNav).click(this.click.bind(this));
  };

  Slider.prototype.click = function (event) {
    var currentSlide = this.$slidesContainer.find(this.options.activeSlide), // li.active
        slides = this.slides.items; // array li element
           
     if ($(event.currentTarget).hasClass(this.options.rightArrowNav)) {
      slides.reverse();
    }
            
    $(currentSlide).animate(
      {left: this.slides.width}, 
      {duration: this.options.duration, 
      complete: function () {
        $(currentSlide).removeClass("active").next().addClass("active");
      }
      });  

      console.log($(event.currentTarget));// button.next

    };


  return this.each(function () {
    new Slider(options, this);
  });
  };
    return this;
})(jQuery);
