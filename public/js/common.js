// menu
$(".header__menu").click(function () {
  $(this).toggleClass("active");
  $(".header__nav").toggleClass("active");
});

$(".check-item").click(function () {
  $(this).toggleClass("active");
});

$(".product-num button").click(function () {
  let num = parseInt(
    $(this).parents(".product-num").find(".product-num_val").text()
  );
  if ($(this).hasClass("btn-minus")) {
    if (num <= 0) {
      num = 0;
    } else {
      num--;
    }
  } else if ($(this).hasClass("btn-plus")) {
    num++;
  }
  $(this).parents(".product-num").find(".product-num_val").text(num);
});

$(".switch").click(function () {
  $(this).toggleClass("active");
})