    /******* Sound Engg filter javaScript Starts ********/
    trackSelection("all");
    function trackSelection(c) {
      
        var x, i;
        x = document.getElementsByClassName("track-block");
        if (c == "all") c = "";
        
        for (i = 0; i < x.length; i++) {
            trackRemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) trackAddClass(x[i], "show");
        }
      
    }

    function trackAddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    function trackRemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }
    
    $('#mytrackContainer .track-inline-item a').on('click', function(event) {
        $("#mytrackContainer .track-inline-item").removeClass("current-tab");
        $(this).parent().addClass("current-tab");
        event.preventDefault();
    });

    $(function() {
        $(".heart").on("click", function() {
          $(this).toggleClass("is-active");
        });
        $('.bt-title [data-toggle="tooltip"]').tooltip({
          template: '<div class="tooltip audio-tool-tip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        });
        $('.widget .socialmedia_network li [data-toggle="tooltip"]').tooltip({
          template: '<div class="tooltip socialmedia-tool-tip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        });
        $('.banner-right-col.overlap-group .plushover-icon[data-toggle="tooltip"]').tooltip({
          template: '<div class="tooltip plushover-tool-tip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        });
    });
    
    /******* Sound Engg filter javaScript End ********/

    
    /****** Careers page filter javascript Starts ******/
    filterSelection("all");
    function filterSelection(c) {

      var x, i;
      x = document.getElementsByClassName("card-block");
      if (c == "all") c = "";
      
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }

    function w3AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    function w3RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }
    
    $('#myBtnContainer .list-inline-item a').on('click', function(event) {
        $("#myBtnContainer .list-inline-item").removeClass("active");
        $(this).parent().addClass("active");
        event.preventDefault();
    });
    /****** Careers page filter javascript Ends ******/

$(document).ready(function() {

    /**** Home page scripts Starts ****/
    $('.client-slider').owlCarousel({
      loop: true,
      autoplay:true,
      margin: 10,
      dots: false,
      nav:true,
      navText:["<img src='images/next-arrow.png'>","<img src='images/prev-arrow.png'>"],
      autoWidth:true,
      autoHeight:true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 5,
          nav: true,
          loop: false,
          margin: 20
        }
      }
    })

    

    $('.teamMember-lists').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        var carouselLength = carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length;
        $(".teamMember-lists span.counter").remove();
        $('.teamMember-lists .owl-prev').after("<span class='counter'>"+ carouselLength +"</span>");
    }).owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav:true,
        navText:["<img src='images/testimonial-next.png'>","<img src='images/testimonial-prev.png'>"],
        autoWidth:true,
        autoHeight:true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
            loop: false,
          },
          767: {
            items: 1,
            nav: true,
            loop: false,
          },
          992: {
            items: 1,
            nav: true,
            loop: false,
            margin: 100
          }
        }
    });
    
    /**** Home page scripts Ends ****/

    /**** Service page scripts Starts ****/
    function fixtitleHeight(){
        var Titleheight = 0;
        var Bodyheight = 0;
        jQuery('.service .service-title').height("100%");
        jQuery('.service-body .service-body--lists').height("100%");
        
        jQuery('.service .service-title').each(function($){
                                if(jQuery(this).height() > Titleheight){
                                    Titleheight = jQuery(this).height();
                                }
        });
        jQuery('.service-body .service-body--lists').each(function($){
                                if(jQuery(this).height() > Bodyheight){
                                    Bodyheight = jQuery(this).height();
                                }
        });
        
        jQuery('.service .service-title').height(Titleheight);
        jQuery('.service-body .service-body--lists').height(Bodyheight);
    }
    fixtitleHeight(); /**** Service page scripts Ends ****/

    /***** SoundEngg Page scripts starts 
    $("#tile-1 .track-tabs a").click(function() {
        var position = $(this).parent().position();
        var width = $(this).parent().width();
        var height = $(this).parent().height();
          $("#tile-1 .slider").css({"left":+ position.left,"width":width, "height":height});
      });
      var actWidth = $("#tile-1 .track-tabs").find(".current-tab").width();
      var actHeight = $("#tile-1 .track-tabs").find(".current-tab").height();
      var actPosition = $("#tile-1 .track-tabs .current-tab").position();
      $("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth,"height": actHeight
    });*****/
});

/****** How we work Scroll Active class jquery Starts *******/
function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}
$(window).scroll(function() {
  var windscroll = $(window).scrollTop();
  
  if (windscroll >= 50) {
      
      $('.rotate-contentarea-toolbar article').each(function(i) {
        // The number at the end of the next line is how pany pixels you from the top you want it to activate.
         
        if ($(this).position().top <= windscroll - 450) {
                $('.rotate-navigation .left-tabs li a.active').removeClass('active');
                $('.rotate-navigation .left-tabs li a').eq(i).addClass('active');
        }
      });

  } else {

      $('.rotate-navigation .left-tabs li a.active').removeClass('active');
      $('.rotate-navigation .left-tabs li:first-child a').addClass('active');
  }
  
}).scroll();


/****** How we work Scroll Active class jquery Ends *******/

/**** Home office & Smallbusiness scripts Starts ****/
function resizeBannerOverlays(){
  $('.ob-icon-row-1').each(function(){
      $w = $('.ob-icon-row-1 .ob-icon-innerrow').width();
      $(this).css( "maxWidth", ( $w ) + "px" );
      $(this).width("100%");
  });
  $('.ob-icon-row-2').each(function(){
      $w = $('.ob-icon-row-2 .ob-icon-innerrow').width();
      $( this ).css( "maxWidth", ( $w ) + "px" );
      $(this).width("100%");
  });
  $('.ob-icon-row-3').each(function(){
      $w = $('.ob-icon-row-3 .ob-icon-innerrow').width();
      $(this).width($w);
  });
}
$(document).ready(function() {
  if ($(window).width() > 1199) {
    resizeBannerOverlays();
  }
});
$(window).resize(function(){ 
  if ($(window).width() > 1199) {
    resizeBannerOverlays();
  }
})

$(document).on('click', '.banner-left-col a[href^=\\#]', function () {
    $('html, body').animate({ scrollTop:  $('section[data-target="'+this.hash.slice(1)+'"]').offset().top }, 1000 );
    return false;
}); /**** Home office & Smallbusiness scripts Ends ****/

/**** Sound Engg page scripts Starts ****/
$(document).ready(function() {
  let inputTagValue = $('input.tag-trap').val();
  let trackLists  = [];
  
  $(".trackadd-btn").on("click", function() {
    if(inputTagValue != null ){
      trackLists = jQuery.makeArray( $('input.tag-trap').val() );
    }
    
    trackLists.push( $(this).attr("data-trackname") );
    track = trackLists.toString();
    $("input[data-role=tagsinput]").tagsinput('add', track );
  });

  $('.per-buttonIn-Voice .voice-selection-arrow').on('click', function(event) {
    $(".per-buttonIn-finalVoice input:text").val($('input.tag-trap').val());
    $("input[data-role=tagsinput]").tagsinput('removeAll');
    event.preventDefault();
  });

/**** Make a wish page's scripts starts ****/

  let make_a_wishinputTagValue = $('input.make_a_wishtag-trap').val();
  let make_a_wishtrackLists  = [];

  $(".stage li").on("click", function() {
    if(make_a_wishinputTagValue != null ){
      make_a_wishtrackLists = jQuery.makeArray( $('input.make_a_wishtag-trap').val() );
    }
    
    make_a_wishtrackLists.push( $(this).attr("data-wishname") );
    wish = make_a_wishtrackLists.toString();
    $("input[data-role=tagsinput]").tagsinput('add', wish );
  });

  $(".stage li").on("click", function(){
    $(this).hide();
  });
  
  $(".dragdrop-wrapper .bootstrap-tagsinput").on("click",".tag [data-role]", function(){
    var wishLists = $("[data-wishname]");
    var wishListsarr = [];
    for(let i=0; i<wishLists.length; i++){
      data = wishLists[i].innerText
      wishListsarr.push(data);
    }
    wishType=$(this).parent();
    wishName = wishType[0].innerText;
    
    var indexWishname = wishListsarr.indexOf(wishName);
    var indexWishnameincrement = indexWishname+1;   
    $(".dragdrop-text .stage li:nth-child("+ indexWishnameincrement +")").show();
  });

/**** Make a wish page's scripts end ****/

  $( ".page-home .rectangle-151").on('click', function(event) {
    
    var offset = $(this).offset();
    var relativeX = (event.pageX - offset.left);
    var relativeY = (event.pageY - offset.top);
    var searchBar = $(".page-home .rectangle-151 .searchhoverPopup");
    var siblingsBar = $(".page-home .rectangle-152 .searchhoverPopup");
    
    siblingsBar.css( {
      display:"none"
    });
    $(this).css( {
      cursor:"inherit"
    });
    $(".page-home .rectangle-152").css( {
      cursor: "url(images/home-page-search.png),auto",
    });
    if($('.page-home .rectangle-151 .searchhoverPopup').css('display') == 'none'){
        searchBar.css( {
          display:"block",
          position:"absolute",
          "z-index": 2,
          "opacity": 1,
          transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          top:relativeY, 
          left: relativeX
    }).show('explode', { pieces: 150 }, 700);
    return false;
      
    }
  });
    
  
  $(".page-home .rectangle-152").click(function(e) {
  
    
    var offset = $(this).offset();
    var relativeX = (event.pageX - offset.left);
    var relativeY = (event.pageY - offset.top);
    var searchBar = $(".page-home .rectangle-152 .searchhoverPopup");
    var siblingsBar = $(".page-home .rectangle-151 .searchhoverPopup");
    
    siblingsBar.css( {
      display:"none"
    });
    $(this).css( {
      cursor:"inherit"
    });
    $(".page-home .rectangle-151").css( {
      cursor: "url(images/home-page-search.png),auto",
    });
    if($('.page-home .rectangle-152 .searchhoverPopup').css('display') == 'none' ){
      
      searchBar.css( {
        display:"block",
        position:"absolute",
        "z-index": 2,
        "opacity": 1,
        transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        top:relativeY, 
        left: relativeX
      }).show('explode', { pieces: 150 }, 700)
     return false;
    }
    
    e.stopPropagation();
  });
  
  $(".page-home img.plushover-icon").click(function(e) {
    e.stopPropagation();
  });
  
  
  $(".page-home").click(function(e) {
    var searchBar = $(".page-home .rectangle-152 .searchhoverPopup");
    searchBar.css( {
      display:"none"
    });
  });
  
  

  /*****  Landing page banner slider round robin fashion******/
  $('.carousel-fade-1').carousel({
    interval: 6000
  });
  $('.carousel-fade-2').carousel({
    interval: 6000
  });
  
  /******  Go to top scroll options ******/
  $(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
    $('#scrollBtn').fadeIn();
    } else {
    $('#scrollBtn').fadeOut();
    }
  });
    
  $('#scrollBtn').click(function() {
      $("html, body").animate({
      scrollTop: 0
      }, 1000);
      return false;
  });


  
  
});

function handleClick(cb) {
  var condition = cb.checked;
  if(condition == true){
    jQuery(".btn-audio-step-validate").removeAttr("disabled");
  }
  else{
    jQuery(".btn-audio-step-validate").prop('disabled', true);
  }
}

/**** Sound Engg page scripts Starts ****/
