$(document).ready(function() {
    var products;
      $.ajax({
      type: 'GET',
      url: 'https://raw.githubusercontent.com/slivadrip/desafio-front-end-humanoide/master/server/data.json',
      success: function(data) {
        products = JSON.parse(data);
          
        if (location.search) {
          findProduct(products, location.search.match(/[0-9]+/g));
        }
      }
    });

    $(".product__form__button .button").on("click", function () {
      $('.modal').toggleClass('modal--show');
      $('body').toggleClass('no-scroll');
    });
  
    $(".modal__buttons .button").on("click", function () {
      $('body').toggleClass('no-scroll');
      $('.modal').toggleClass('modal--show');
    });
    
  });
  
  
  function findProduct(data, product_id) {
    var item = data.products[product_id - 1];
    var price = "";
  
    if (item.promotional_price) {
      if (item.price) {
        price = "De <span class='product__price--dashed'>R$ " + item.promotional_price + "</span> por <strong>R$ " + item.price + "</strong></span>"
      } else {
        price = "Por <strong>R$ " + item.promotional_price + "</strong>"
      }
    } else {
      price = "Por <strong>R$ " + item.price + "</strong>"
    }
  
    $('.product__image').attr('src', '../' + item.image);
    $('.product__name').text(item.title);
    $('.product__description').text(item.description);
    $('.product__price').html(price);
  
    $('.product__inputs').empty();
  
    for (var index = 0; index < item.sizes.length; index++) {
      var size = item.sizes[index];
        $($('.product__inputs')[0]).append("<input type='radio' id='" + size + "' class='product__form_radio' name='size' value='" + size + "'><label for='" + size + "' class='product__form__label'>" + size + "</label>")
       
        $($('.product__inputs')[1]).append("<input type='radio' id='" + size + "-m' class='product__form_radio' name='size-m' value='" + size + "'><label for='" + size + "-m' class='product__form__label'>" + size + "</label>")
    }
  }