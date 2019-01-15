$('body').on('click','a[href^="#"]',function(event){
    // anchor scroll with header offset
    event.preventDefault();
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
    //change this number to create the additional off set
    var customoffset = 48
    $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
  });
