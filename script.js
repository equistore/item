const menuToggle = document.querySelector('.menu-toggle input');
const nav =document.querySelector('.nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

$(document).on('click','.send', function(){
    /* Inputan Formulir */
    var input_nickname      = $("#nickname").val(),
        input_idserver      = $("#idserver").val(),
        input_product       = $('input[name=tbl]:checked').val();
 
    /* Pengaturan Whatsapp */
    var walink      = 'https://web.whatsapp.com/send',
        phone       = '6285155499439',
        text        = '',
        text_yes    = 'Pesanan Anda berhasil terkirim.',
        text_no     = 'Isilah formulir terlebih dahulu.';
 
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }
 
    if(input_nickname != "" && input_product != ""){
        /* Whatsapp URL */
        var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text +
            '*Nickname* : ' + input_nickname + '%0A' +
            '*ID Server* : ' + input_idserver + '%0A' +
            '*Order* : ' + input_product;
 
        /* Whatsapp Window Open */
        window.open(checkout_whatsapp,'_blank');
        document.getElementById("text-info").innerHTML = '<div class="alert alert-success">'+text_yes+'</div>';
    } else {
        document.getElementById("text-info").innerHTML = '<div class="alert alert-danger">'+text_no+'</div>';
    }
});
$(document).scroll(function() {
    return $(document).scrollTop() > 300 ? $('.ignielToTop').addClass('show') : $('.ignielToTop').removeClass('show')
    }), $('.ignielToTop').click(function() {
      return $('html,body').animate({
        scrollTop: '0'
      });
  });