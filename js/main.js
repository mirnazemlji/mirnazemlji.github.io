$(document).ready(function() {

    $('.scrolly').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this).data('page') || $(this).attr('href');
        
        $('.tm-main-nav li a').removeClass('active');
        $(this).addClass('active');
        
        loadSection(target);
    });

    loadSection('#tm-section-1');   // default

    function loadSection(sectionId) {
        $('#main-content').html('<div class="loading">Loading...</div>');

        let fileName = '';

        switch(sectionId) {
            case '#tm-section-1': fileName = 'sections/intro.html'; break;
            case '#tm-section-2': fileName = 'sections/highlights.html'; break;
            case '#tm-section-3': fileName = 'sections/publications.html'; break;
            case '#tm-section-4': fileName = 'sections/ethics.html'; break;
            case '#tm-section-5': fileName = 'sections/chat.html'; break;
            default: fileName = 'sections/intro.html';
        }

        $.get(fileName)
            .done(function(data) {
                $('#main-content').html(data);
            })
            .fail(function() {
                $('#main-content').html(`
                    <p style="color:red; padding:30px;">
                        Error loading ${fileName}<br><br>
                        Check that the file exists in the <strong>sections/</strong> folder.
                    </p>
                `);
            });
    }

});
