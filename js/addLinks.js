$(function() {
    const url = 'https://alg.cubing.net/?type=alg&view=playback&alg=';
    $('.alg').each(function() {
        const algText = $(this).text();
        $(this).attr('href', url+algText.replace(/ /g, '_').replace(/'/g, '-'));
        $(this).html(algText.replace(/ /g, '&nbsp'));
    });
});