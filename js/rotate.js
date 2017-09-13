$(function() {
    $('.alg').hover(function() {
        const direction = rotateDirection(this);
        const img = $(this).parent().siblings('img');//.parent().children()[0];
        img.toggleClass(direction);
    });
});

function rotateDirection(alg) {
    var text = $(alg).text();
    if(text.charAt(1) === 'U') {
        switch(text.charAt(2)) {
        case '\'':
            return 'left';
        case '2':
            return 'double';
        default:
            return 'right';
        }
    }
    return '';
}