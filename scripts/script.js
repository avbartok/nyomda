$(document).ready(function() {
    for (let i = 0; i < 1; i++) {
        let left = Math.random() * ($(window).width() - 100);
        let top = Math.random() * ($(window).height() - 100);
        $('body').append(`<div id='star${i}' class='star' contentEditable='false' 
                           style='left:${left}px; top:${top}px;'><b>PRINTS GO BY<br> WORKSHOP</b> <br> 14.-15.Juni 16 Uhr<br> Anmeldung</div>`);
    }

      for (let i = 0; i < 1; i++) {
        let left = Math.random() * ($(window).width() - 100);
        let top = Math.random() * ($(window).height() - 100);
        $('body').append(`<div id='star${i}' class='star' contentEditable='false' 
                           style='left:${left}px; top:${top}px;'><b>NEW PRINTS<br> IDA SCHIELE - BODYFORMS </b> <br> A5, 14 Seiten, 2c<br> Auflage 25 Stück</div>`);
    }
  
    $('.star').draggable();
});
