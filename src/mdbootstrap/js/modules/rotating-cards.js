/* ROTATING CARDS */
$(function () {
    $('.rotate-btn').on('click', function () {
        var cardId = $(this).data('card');
        $('#' + cardId).toggleClass('flipped');
    });
});

