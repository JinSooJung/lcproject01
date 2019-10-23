$(document).ready(function(){

    var $doc = $('html, body');

    //no need to memorize. Just know that it exists, and search it when necessary.
    $('a').click(function(){
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 350);
        return false;
    });
});