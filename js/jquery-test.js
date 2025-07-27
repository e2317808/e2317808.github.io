console.log("jquery-test.jsを読み込みました")

let test_p_1 = $("#test-p-1").text();
console.log(test_p_1);

let test_p_2 = $(".test-p-2").text();
console.log(test_p_2);

let p_123 = $("p").text();
console.log(p_123);

// メソッド
// toggle
function toggle() {
    // $("#test-p-1").hide();
    // $("#test-p-1").show();
    
    $("#test-p-1").toggle();
}
function slide() {
    // $("#test-p-1").slideDown();
    // $("#test-p-1").slideUp();
    
    $("#test-p-1").slideToggle();
}
function fade() {
    // $("#test-p-1").fadeIn();
    // $("#test-p-1").fadeOut();
    
    $("#test-p-1").fadeToggle();
}
function color() {
    $("#test-p-1").css("color","red");
    $("#test-p-1").css("fontSize","64px");
}
function customAnimate() {
    // JSON形式でプロパティ値を渡す
    // $("#test-p-1").animate({
    //     "fontSize": "64px",
    // });

    // メソッドチェーン
    $("#test-p-1").animate({
        "fontSize": "64px",
    }).animate({
        "fontSize": "16px",
    });
}

// イベントハンドラ
$("#input-1").on("focus", function(){
    console.log("インプットタグがフォーカスされました。");
});

// clickevent
$("h3").on("click", function(){
    console.log("h3タグがクリックされました");
    $(this).next().slideToggle();
})