$(document).ready(function() {
    for (let i = 0; i < 1; i++) {
        let diameter = 150; // Set the diameter of the circle
        let left = Math.random() * ($(window).width() - diameter);
        let top = Math.random() * ($(window).height() - diameter);
        $('body').append(`
            <div id='star${i}' class='sticker' style='left:${left}px; top:${top}px; width:${diameter}px; height:${diameter}px;'>
                <div class='sticker-content'>
                    <b>OFFENE WERKSTATT</b> <br> Dienstag 19.12. ab 17-21h
                </div>
            </div>
        `);
    }

    $('.sticker').draggable();
});
