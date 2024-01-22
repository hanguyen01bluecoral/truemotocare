//lop 4 items
console.log('test')


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 1.50,
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  
  var swiper = new Swiper("#mySwiper1", {
    spaceBetween: 20,
    slidesPerView: 1.3,
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper("#mySwiper2", {
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


var swiper = new Swiper("#mySwiper", {
    autoplay: {
      delay: 3000,
      speed: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    loop: true
  });

//dropdown



$(function () {
    const dropdown = {
        init() {
            dropdown.create();
            dropdown.hoverElement();
        },
        create() {
            const dropdownEle = $("[data-dropdown-element]");
            const dropdownGroup = $("[data-dropdown]");
            if (!dropdownEle.length) return;

            dropdownGroup.each(function(index, el) {
                if($(this).hasClass('on')) {
                    $(this).find('[data-dropdown-content]').stop().slideDown(350);
                }            
            });

            dropdownEle.on('click', function(event) {
                
                var _time = 0;
                var _this = $(this);
                var dropdownContent = _this.parents('[data-dropdown]').find('[data-dropdown-content]');

                if(_this.parent().hasClass('on')) {
                    event.preventDefault();
                    _this.parent().removeClass('on');
                    dropdownContent.stop().slideUp(350);
                } else {
                    event.preventDefault();
                    var dropdownCurrent = _this.parents('[data-dropdown-group]').find('[data-dropdown].on');

                    if(dropdownCurrent.length > 0) {
                        _time = 350;
                        dropdownCurrent.removeClass('on');
                        dropdownCurrent.find('[data-dropdown-content]').stop().slideUp(350);
                    }

                    setTimeout(function() {
                        _this.parent().toggleClass('on');
                        dropdownContent.stop().slideToggle(350);
                    }, _time)
                }
                
            });
        },
        hoverElement() {
            const dropdownHover = $('[data-dropdown-hover]');
            if(dropdownHover.length == 0) return;

            dropdownHover.each(function(index, el) {
                const $this = $(this);
                $this.on('mouseenter', function(event) {
                    if($(window).width() > 1024) {
                        $this.find('[data-dropdown-element]').trigger('click');
                    }
                });

                $this.on('mouseleave', function(event) {
                    if($(window).width() < 1024) {
                        if($this.find('[data-dropdown]').hasClass('on')) {
                            $this.find('[data-dropdown-element]').trigger('click');
                        }
                    }
                });            
            });
        }
    };

    dropdown.init();
});

//auto troi
$('.logo_loop').slick({
    slidesToShow: 6, // Số lượng item hiển thị trên mỗi slide
    slidesToScroll: 1, // Số lượng item chuyển đổi khi bạn nhấp vào nút chuyển tiếp/lùi
    autoplay: true, // Tự động chuyển slide
    autoplaySpeed: 0, // Thời gian chuyển slide (ms)
    speed: 6000, //toc do troi
    cssEase: "linear",
    pauseOnDotsHover: true,
    arrows: false, // Ẩn nút chuyển động
    dots: false, // Hiển thị các chấm chuyển động
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
