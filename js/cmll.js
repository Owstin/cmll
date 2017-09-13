$(function() {
    $('.alg').hover(function() {
        const card = $(this).parent().parent().children();//.parent().children()[0];
        const img = $(card).find('img', this);
        //$(card).toggleClass('flip');
        console.log(img);
    });
});