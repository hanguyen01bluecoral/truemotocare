

$(function () {
    if (!document.querySelector('header')) return false;

    let flagSubNav = false,
        flagNav = false;

    const nav = document.querySelector("[data-nav]");
    const hamburger = document.querySelector('[data-hamburger-element]');

    const header = {
        init() {
            header.controlNav();
            header.stickyNav();
            header.search();
            header.utils();
        },
        openNav() {
            document.documentElement.classList.add('on-nav-mb');
            nav.classList.add('on');
            hamburger.classList.add('on');

            setTimeout(function() {
                hamburger.setAttribute('aria-expanded', 'true');
            }, 300);
        },
        closeNav() {
            hamburger.classList.remove('on');
            nav.classList.remove('on')

            setTimeout(function() {
                document.documentElement.classList.remove('on-nav-mb');
                hamburger.setAttribute('aria-expanded', 'false');
            }, 300);
        },
        openSubNav(name) {
            const expandElement = document.querySelector(`[data-expand-element][data-name="${name}"]`);
            const expandContent = $(`[data-expand-content][data-name="${name}"]`);

            expandElement.setAttribute('aria-expanded', 'true');
            expandElement.parentNode.classList.add('on');
            expandContent.slideDown('400');
        },
        closeSubNav(name) {
            const expandElement = document.querySelector(`[data-expand-element][data-name="${name}"]`);
            const expandContent = $(`[data-expand-content][data-name="${name}"]`);

            expandElement.setAttribute('aria-expanded', 'false');
            expandElement.parentNode.classList.remove('on');
            expandContent.slideUp('400');
        },
        controlNav() {

            // nav desktop

            const liElements = $(".ul-main > li");

            liElements.each(function() {
                let timeout;
                let $this = $(this);
                const expandContent = $this.find("[data-expand-content]");

                $this.on('mouseenter', function() {

                    timeout = setTimeout(function() {
                        $this.addClass('on');
                        expandContent.addClass("on");
                    }, 100);
                });

                $this.on('mouseleave', function(event) {
                    clearTimeout(timeout);
                    $this.removeClass('on');
                    expandContent.removeClass("on");
                });
            });

            nav.querySelectorAll('[data-expand-element]').forEach((expandElement) => {
                expandElement.addEventListener('click', function(event) {
                    event.preventDefault();
                    let name = this.getAttribute('data-name');
                    if(this.getAttribute('aria-expanded') == 'true') {
                        
                        header.closeSubNav(name);
                    } else {
                        header.openSubNav(name);
                    }
                });
            })

            hamburger.addEventListener('click', function() {
                if (this.getAttribute('aria-expanded') === 'true') {
                    header.closeNav();
                } else {
                    header.openNav();
                }
            });
        },
        stickyNav() {
            let lastScrollTop = 0;
            let st = 0;
            let triggerStart = 0;
            let rafId = null;

            function sticky() {
                st = window.scrollY;
                triggerStart = document.querySelector('header').offsetHeight + 400;

                if (st > document.querySelector('header').offsetHeight) {
                    document.querySelector('header').classList.add('trigger-sticky');
                } else {
                    document.querySelector('header').classList.remove('trigger-sticky');
                }

                if (st > triggerStart) {
                    if (st > lastScrollTop) {
                        document.querySelector('body').classList.remove('scroll-up');
                        document.querySelector('body').classList.add('scroll-down');
                    } else {
                        document.querySelector('body').classList.add('scroll-up');
                        document.querySelector('body').classList.remove('scroll-down');
                    }

                    document.querySelector('header').classList.add('trigger-transition');
                } else {
                    document.querySelector('body').classList.remove('scroll-up');
                    document.querySelector('body').classList.remove('scroll-down');
                    document.querySelector('header').classList.remove('trigger-transition');
                }

                lastScrollTop = st;
                rafId = null;
            }

            function handleScroll() {
                if (!rafId) {
                    rafId = requestAnimationFrame(sticky);
                }
            }

            sticky();
            window.addEventListener('scroll', handleScroll);
        },
        search() {
            const searchEle = $('[data-search-element]');
            if(searchEle.length == 0) return;

            searchEle.on('click', function(event) {
                event.preventDefault();

                if($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    $('[data-search-content]').removeClass('on');
                } else {
                    $(this).addClass('on');
                    $('[data-search-content]').addClass('on');
                    setTimeout(function (argument) {
                        $('[data-search-content]').find('.c-form-control').focus();
                    }, 300);
                }
            });

            $('[data-search-close]').on('click', function(event) {
                event.preventDefault();
                $('[data-search-element]').removeClass('on');
                $('[data-search-content]').removeClass('on');
            });
        },
        utils() {
            const ele = $('[data-utilities]');
            if(ele.length == 0) return;

            setTimeout(function() {
                ele.addClass('w-transition');
            }, 1000);

            setTimeout(function() {
                ele.addClass('on');
            }, 4000);
        }
    }

    header.init();
})