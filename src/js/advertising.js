//= partials/jquery.min.js
//= partials/fullpage.js
$(function () {
    $('#fullpage').fullpage({
        scrollBar: true,
        verticalCentered: true,
        parallax: true,
        anchors:['firstPage', 'material', 'news'],
        navigationTooltips: ['firstSlide', 'material', 'news'],
        responsiveWidth: 485
    });

});