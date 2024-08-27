var swiper = new Swiper('.blog-slider', {
    effect: 'fade',
    loop: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000
    },
    resizeObserver: true,
    on: {
      resize: function() {
          this.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
    }, 
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

var comtainer = document.getElementById('swiper_container');
  if (comtainer !== null) {
    comtainer.onmouseenter = function() {
      swiper.autoplay.stop();
    };
    comtainer.onmouseleave = function() {
      swiper.autoplay.start();
      }
  } else {}
