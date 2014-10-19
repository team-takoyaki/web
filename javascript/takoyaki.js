$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 500;// ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});


//ナビゲーション部分移動ソース
$( document ).ready( function ()
   {
      $( '#navigation' ).scrollFollow();
   }
);

$('body').addClass('adjustWidth');



//サブナビゲーションの表示切り替え
//var none_appear = document.querySelectorAll(".none_appear");
var none_appear = document.querySelector("#none_appear");
var sub = document.querySelectorAll(".sub");
var appearNav = document.querySelectorAll(".appearNav");

for (i = 0; i < sub.length; i++){
   appearNav[i].addEventListener("mouseover", function(){
      none_appear.style.display = "block";
   },false);
}
for (i = 0; i < appearNav.length; i++){
   appearNav[i].addEventListener("mouseout", function(){
      none_appear.style.display = "none";
   },false);
}


