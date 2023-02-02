/* JS Demo Store Master Head - Start */

$('body').css('background-color', bgColor);
// $('a').css('color', textColor);


/*-------nav active--------*/
$(".open-panel").click(function () {
    $(".nav").toggleClass("active");
    $(".container").toggleClass("active");
});

$(window).load(function () {
    $('#status').fadeOut();
    $('#preloader').delay(150).fadeOut('slow');
    $('body').delay(150).css({ 'overflow': 'visible' });
})

$(".outer").click(function () {
    var $btn = $(this);
    $btn.button('loading').css('background-color', '#66FFE0').css('border', '1px solid #66FFE0');
    setTimeout(function () {
        $btn.button('reset');
    }, 10000);
});

/* JS Demo Store Master Head - End */

$('.masthead__cart--btn-remove').click(function () {
    var ahref = $(this).data('ahref');
    var data = $(this).closest('.add-form').serialize();
    console.log(data);

    $.ajax({
        type: 'GET',
        data: data,
        success: function (response) {

            $.ajax(ahref, {
                success: function (response) {
                    console.log(response + "removed");

                    $('#aaa').fadeOut();
                }
            });
        }
    });
});