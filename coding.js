$('body').on('click','[side-open]',function () {
   var sideOpen=$(this).attr('side-open');
   $('#'+sideOpen).addClass('open');
});

$('body').on('click','[close]',function (params) {
    $('.modal-side').removeClass('open'); 
});
