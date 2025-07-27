$("h3").on("click", function(){
    console.log("h3タグがクリックされました");
    $(this).next().slideToggle();
})
$("h2").on("click", function(){
    console.log("h3タグがクリックされました");
    $(this).next().slideToggle();
})