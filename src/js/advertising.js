//= partials/jquery.min.js
//= partials/fullpage.js
$(function () {
    $('#fullpage').fullpage({
        scrollBar: true,
        verticalCentered: true,
        parallax: true,
        navigation: true,
        navigationPosition: 'left',
        anchors: ['Musan', 'advertising', 'ad', 'tv', 'radio', 'portal', 'pressa'],
        navigationTooltips: ['Агенство', 'Услуги', 'Наружная реклама', 'Телевидение', 'Радио', 'Информационый портал', 'Пресса'],
        responsiveWidth: 485
    });

});