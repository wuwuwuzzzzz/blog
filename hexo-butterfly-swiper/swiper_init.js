var blogSliderSwiper = new Swiper('.blog-slider', {
  effect: 'fade',
  loop: true,
  observer: true, // 修改swiper自己或子元素时，自动初始化swiper
  observeParents: true,   // 修改swiper父元素时，自动初始化swiper
  autoplay: {
    disableOnInteraction: false,
    delay: 3000
  },
  resizeObserver: true,
  on: {
    resize: function () {
      setTimeout(() => {
        this.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
      }, 500)
    }
  },
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true
  }
});

var comtainer = document.getElementById('swiper_container');
if (comtainer !== null) {
  comtainer.onmouseenter = function () {
    blogSliderSwiper.autoplay.stop();
  };
  comtainer.onmouseleave = function () {
    blogSliderSwiper.autoplay.start();
  }
}
