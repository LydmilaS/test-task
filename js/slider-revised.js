(function ($) {

    $.fn.slider = function (options) {

        var Slider = function (options, slidesContainer) {
            $.extend(this.options, options);
            this.options.$slidesContainer = $(slidesContainer);
            this.slides = {
                width: $(window).width(),
                $items: $(this.options.sliderCount),
                itemsSize: this.slides.$items.size()
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
        };

        Slider.prototype.click = function (event) {
            var currentSlide = this.options.$slidesContainer.find(this.options.activeSlide),
                slides = this.slides.items;
            if ($(event.currentTarget).hasClass(this.options.rightArrowNav)) {
                slides.reverse();
            }


            currentIndex -= 1;

            if (currentIndex < 0) {
                currentIndex = this.slides.itemsSize - 1;
            }

            $(item).animate({right: width}, {duration: this.options.duration});
            var item = $('.slider-item').eq(currentIndex);
            this.slides.$items.hide();
            item.css('display', 'inline-block');
        };



        Slider.prototype.leftClickAction = function () {
            var currentIndex = 0,
                item = $(this.options.sliderCount).eq(currentIndex);
        };

        Slider.prototype.rightClickAction = function () {
            var currentIndex = 0,
                width = $(window).width(), // width device
                items = $(this.options.sliderCount),
                itemsSize = items.size(), // 4
                item = $(this.options.sliderCount).eq(currentIndex);

            $(this.options.rightArrowNav).click(function () {

                currentIndex += 1;

                if (currentIndex > itemsSize - 1) {
                    currentIndex = 0;
                }

                $(item).animate({left: width});
                var item = $('.slider-item').eq(currentIndex);
                items.hide();
                item.css('display', 'inline-block');
            });
        };

        return this.each(function () {
            new Slider(options, this);
        });
    };
    return this;
})(jQuery);
