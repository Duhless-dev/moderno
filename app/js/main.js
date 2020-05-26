$(function(){
    var mixer = mixitup('.product__inner-filter-item'); 
    $(".raiting-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });
     
      $(".product__slider-inner").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
      }); 
});
