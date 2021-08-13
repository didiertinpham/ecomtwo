

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

       /* toggle nav */
            
    
            /*animate links*/
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
            link.style.animation = '';
            } else {
            link.style.animation = `navLinkFade 0.3s
            ease forwards ${index / 7 + 0.3}s`;
            }
        });  
        burger.classList.toggle('toggle');
    });
}

navSlide();


/* ---------------------shopping cart---------------------*/

$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change',
        function(e) {
        update_amounts();    
    });
});
function update_amounts(){
    var sum = 0.0;
    $('#myTable > tbody > tr').each(function(){
        var qty = $(this).find('.qty').val();
        var price =$(this).find('.price').val();
        var amount = (qty*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
}

/* -------------------qty add or remove-------------------*/

var incrementQty;
var DecrementQty;
var plusBtn = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function(){
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    $n.val(Number($n.val())+1 );
    update_amounts();
});

var decrementQty = minusBtn.click(function(){
    var $n = $(this)
    .parent(".button-container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if(QtyVal > 0){
        $n.val(QtyVal-1);
    }
    update_amounts();
});




