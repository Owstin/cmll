$(function() {
    let url = 'https://alg.cubing.net/?type=alg&view=playback&alg=';
    $('.alg').each(function() {
        const algText = $(this).text().replace(/ /g, '_').replace(/'/g, '-');
        $(this).attr('href', url+algText);
    });
});