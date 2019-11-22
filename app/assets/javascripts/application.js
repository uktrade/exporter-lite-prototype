/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$('a.more-link').click(function(ev){
    ev.preventDefault();
    
    // hide everything
    $('.box').not(
        // except the corresponding box
        $('.box.'+$(this).data('box')+':hidden').fadeIn()
    ).fadeOut(); 
});