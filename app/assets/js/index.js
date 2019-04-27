$(document).ready(function(){
$.getJSON('https://raw.githubusercontent.com/slivadrip/desafio-front-end-humanoide/master/server/data.json', function(data) {
  $.each(data, function (key, item) {
    for (var count = 0; count < item.length; count++) {
      if (item[count].promotional_price) {
        if (item[count].price) {
          item[count].price = "De <span class='item__price--dashed'>R$ " + item[count].promotional_price + "</span> por <span class='item__price--color-orange'><strong>&nbsp;R$ " + item[count].price + "</strong></span>"
        } else {
          item[count]. price = "Por <span class='item__price--color-orange'><strong>&nbsp;R$ " + item[count].promotional_price + "</strong></span>"
        }
      } else {
        item[count].price = "Por <span class='item__price--color-orange'><strong>&nbsp;R$ " + item[count].price + "</strong></span>"
      }

       $($('.products__container')[0]).append("<div class='item'><img src='../" + item[count].image + "' alt='fantasia' class='item__image'><div class='item__price'>" + item[count].price + "<br><a href='view.html?product_id=" + item[count].id +  "' class='button item__button'>Mais detalhes</a></div></div>")

    }
    });
});
});