$(document).ready(function() {

    // Smooth scroll and navigation
    $('.scrolly').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this).data('page') || $(this).attr('href');
        const pageType = $(this).data('page-type');
        
        // Highlight active nav
        $('.tm-main-nav li a').removeClass('active');
        $(this).addClass('active');
        
        // Load the corresponding section
        loadSection(target, pageType);
    });

    // Load the default section (Introduction) on page load
    loadSection('#tm-section-1');

    // Initialize carousel if needed
    function initCarousel() {
        $('.tm-img-slider').slick({
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    }

    function loadSection(sectionId, pageType = null) {
        $('#main-content').html('<div class="loading">Loading...</div>');

        // For now, we'll load from separate HTML files.
        // Later we can improve this.
        let fileName = '';

        switch(sectionId) {
            case '#tm-section-1':
                fileName = 'sections/intro.html';
                break;
            case '#tm-section-2':
                fileName = 'sections/highlights.html';
                break;
            case '#tm-section-3':
                fileName = 'sections/publications.html';
                break;
            case '#tm-section-4':
                fileName = 'sections/ethics.html';
                break;
            case '#tm-section-5':
                fileName = 'sections/chat.html';
                break;
            case '#tm-section-15':   // Cours E(n)t(r)é en Maths
                fileName = 'sections/cours.html';
                break;
            default:
                fileName = 'sections/intro.html';
        }

        $.get(fileName, function(data) {
            $('#main-content').html(data);
            
            if (pageType === "carousel") {
                initCarousel();
            }
        }).fail(function() {
            $('#main-content').html('<p>Error loading content. Please refresh the page.</p>');
        });
    }

});
