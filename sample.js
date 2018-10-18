$(function(){
    // 左へのページ送りボタン
    $("#honbun_next").click(function(){
        var speed = 400; // ミリ秒
        var widthH = $("#honbun").width();
        var hereH = $("#honbun").scrollLeft();
        var position = hereH - widthH;
        $('#honbun').animate({scrollLeft:position}, speed, 'swing');
        return false;
    })
    // 右へのページ送りボタン
    $("#honbun_prev").click(function(){
        var speed = 400; // ミリ秒
        var widthH = $("#honbun").width();
        var hereH = $("#honbun").scrollLeft();
        var position = hereH + widthH;
        $('#honbun').animate({scrollLeft:position}, speed, 'swing');
        return false;
    })
    // 本文のブロック内でスクロールした時に各ボタンの濃さを変化させる
    $("#honbun").scroll(function () {
        var hereH = $("#honbun").scrollLeft();
        var widthHarea = document.getElementById("honbun").scrollWidth;
        var widthH = widthH = $("#honbun").width();
        if (hereH == 0) {
            //ブロックの先頭で右へページを送るボタンを一番薄くする
            $('#honbun_prev img').addClass('opacity03');
        } else if ((hereH - widthH) * -1 == widthHarea) {
            //ブロックの最後で左へページを送るボタンを一番薄くする
            $('#honbun_next img').addClass('opacity03');
        } else {
            //その他の場合はページ送りのボタンを通常通り表示する
            $('#honbun_next img').removeClass('opacity03');
            $('#honbun_prev img').removeClass('opacity03');
        }
        return false;
    });
});
