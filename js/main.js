$(document).ready(function() {

    // Navigation
    $('.scrolly').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this).data('page') || $(this).attr('href');
        
        $('.tm-main-nav li a').removeClass('active');
        $(this).addClass('active');
        
        loadSection(target);
    });

    // Load default section
    loadSection('#tm-section-1');

    function loadSection(sectionId) {
        $('#main-content').html('<p style="padding:40px;">Loading...</p>');

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
                    <p style="color: red; padding: 40px;">
                        Error: Could not load <strong>${fileName}</strong><br><br>
                        Make sure the file exists in the <code>sections/</code> folder.
                    </p>
                `);
            });
    }
});
