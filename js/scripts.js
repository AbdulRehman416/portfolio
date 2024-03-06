$(window).load(function(){
    
    // ieCheck
    var ie = false;
    var aniButtonDuration = 350;
	 var defMh = 0, h = 0;
	 defMh = parseInt($('body').css('minHeight'));
     var MSIE = ($.browser.msie) && ($.browser.version <= 8)
    
    if($.browser.msie && $.browser.version<9)
    {
        aniButtonDuration = 0;
        ie = true;
    }
    
    
   $('.gall_spinner').hide();
    $('#bgStretch')
        .bgStretch({
            align:'rightTop',
            autoplay: false,
            navigs:$('.pagin').navigs({prevBtn:$('#prev_arr'), nextBtn:$('#next_arr')})
        }).sImg({
            sleep: 1000,
            spinner:$('.gall_spinner')
        }) 
        
    $('.more_btn_arr')
	.sprites({
		method:'simple',
		duration:400,
		easing:'easeOutQuint',
		hover:true
	})
        
	 
	 //follow-icons-------------	 
   $('.follow-icon .img_act').css({opacity:0})
	$('.follow-icon a').hover(function(){
		$(this).find('.img_act').stop().animate({opacity:1})
      $(this).find('p').stop().animate({color:'#000'}, 550, 'easeOutSine')						 
	}, function(){
		$(this).find('.img_act').stop().animate({opacity:0})
      $(this).find('p').stop().animate({color:'#1E1E1E'}, 550, 'easeOutSine')							 
	})
	


    
    $(".pagin").jCarouselLite({
            btnNext: ".next",
            btnPrev: ".prev",
            scroll:1,
            visible: 7,
            easing: 'easeOutExpo',
            speed: 700,
                mouseWheel:true,
                circular: false
    })      
    $('.pagin a').after('<span></span>');
    
    var curr_item = $(".pagin li").length/3;
    $(".pagin li").find('span').stop().animate({opacity:0},0, function(){
        
        $(".pagin li").eq(curr_item).find('span').stop().animate({opacity:1},0); 
    }); 
    
    $('.pagin a').hover(
        function(){
            if (!$(this).parent().hasClass('active'))
               $(this).siblings('span').stop().animate({'width':'100%','height':'100%',opacity:1},500,'easeOutExpo');            
        },
        function(){
            if (!$(this).parent().hasClass('active'))
               $(this).siblings('span').stop().animate({'width':'100%','height':'100%',opacity:0},700,'easeOutExpo');  
        }
    );;
    
    $('.next,.prev').hover(
        function(){
            if (!MSIE){
                $(this).children('span').css({opacity:'0',display:'block'}).stop().animate({opacity:'1'});  
            } else {
                $(this).children('span').stop().show();
            }  
        },
        function(){
            if (!MSIE){
                $(this).children('span').stop().animate({opacity:'0'},function(){$(this).css({display:'none'});});  
            }else {
                 $(this).children('span').stop().hide();
            }
        }
    );


    


    ////////////////// start gallery ////////////////////   
   

        
        $('.slider')._TMS({
            show:0,
            pauseOnHover:true,
            duration:1000,
            preset:'diagonalFade',
            pagination:$('.img-pags').uCarousel({show:4,shift:0}),
            pagNums:false,
            slideshow:7000000,
            numStatus:true,
            overflow:'hidden',
            waitBannerAnimation:false,
            progressBar:false
        })      
 
                    
      if(!MSIE){ $('._thumbList >li').find(".zoomSp1").fadeTo(500, 0)}else{ $('._thumbList >li').find(".zoomSp1").css({"display":"none"})  }
        
        var currPic = 0;
        $('._thumbList > li').eq(0).find(".zoomSp1").fadeTo(500, 1)
        
         $('._thumbList > li').hover(
         function(){
              if($(this).index() !== currPic){
                         $(this).find(".zoomSp1").stop().fadeTo(500, 1)
             }     
         },
         function(){
                    if($(this).index() !== currPic){
                              $(this).find(".zoomSp1").stop().fadeTo(500, 0)
                    }
              }
         )  
         
        is_anim_slider = false;
        $('._thumbList > li').click(
            function(){
                if(!is_anim_slider){
                    is_anim_slider = true;
                    $('._thumbList > li').eq(currPic).find(".zoomSp1").stop().fadeTo(500, 0);
                    currPic = $(this).index();
                    $('._thumbList > li').eq(currPic).find(".zoomSp1").stop().fadeTo(500, 1);
                }
            }
      )
         
     ////////////////// end gallery ////////////////////  


    //page4 slider
    if ($(".slider2").length) {
        $('.slider2').cycle({
            fx: 'scrollHorz',
            speed: 600,
            timeout: 0,
            next: '.next1',
            prev: '.prev1',                
            easing: 'easeInOutExpo',
            cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
        })
    };
    var ind = 0;
    var len = $('.nav_item').length;
    $('.nav_item').bind('click',function(){
        //ind = $(this).index()-1;
        console.log("$(this).index() = " + $(this).index())

        ind = $(this).index()-2;
        $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
        $(this).addClass('active');
        $('.slider2').cycle(ind);
    });
    $('.prev1').bind('click',function(e){
            ind--;
            if (ind<0){
                ind=(len-1);
            }
            
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
        
    });
     $('.next1').bind('click',function(e){
            ind++;
            if (ind>(len-1)){
                ind=0;
            }
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
    });
     $('.start1').bind('click',function(e){
            ind=0;
            $('.slider2').cycle(ind);
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
    });
     $('.end1').bind('click',function(e){
            ind=(len-1);
            $('.slider2').cycle(ind);
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
    });
    //end page4 slider





    /////////////////////////////////////////////////////////////////////////// 
    //                           content switch                              //
    ///////////////////////////////////////////////////////////////////////////
    
    var content=$('#content'),
        nav=$('.menu'),
        thums=$('.paginwraper'),
        splash = $('#splash');
    
    $('ul#menu').superfish({
      delay:       700,
      animation:   {height:'show'},
      speed:       300,
      autoArrows:  false,
      dropShadows: false
    });

  
    
    nav.navs({
		useHash:true,
        defHash:'#!/',
		hoverIn:function(li){
		   	  $('>a ',li).css({color:'#c1b6af'});
		   	  $('> a > span ',li).css({display:'block'}).stop().animate({opacity:1}, aniButtonDuration, 'easeOutCubic');
		},
		hoverOut:function(li){
		  if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
              $('>a ',li).css({color:'#82746f'});
		   	  $('> a > span ',li).stop().animate({opacity:1}, aniButtonDuration, 'easeOutCubic', function(){
		   	      $(this).css({display:'none'});
		   	  });
          }
		}				
    })
    
	 
	 $(window).resize(function (){
		 if (h < defMh) {h = defMh}
		 $('body').stop().animate({'minHeight':h})
		});
		
		
     content.tabs({
		preFu:function(_)
        {
            _.li.css({'visibility':'hidden', top:'620px'});
            _.li.each(function(){
                if($(this).height() < 590){
                    $(this).height(590);
                } else {
                    $(this).height($(this).height()+0)
                }
            })
		}
		,actFu:function(_)
        {

            if(_.pren == undefined){
                aniDelay = 250;
            } else {
                if(_.n == -1 && _.pren == -1){
                    aniDelay = 250;
                } else {
                    aniDelay = 450;
                }
            }
            
            if(_.n == -1){
                content.stop().delay(aniDelay).animate({height:'420px'}, 650,'easeOutCubic');
                thums.stop().delay(aniDelay).animate({left:'-30px'}, 650,'easeOutCubic');
                h = 420;
				$(window).trigger('resize');
            } else {
                /*content.stop().delay(0).animate({height:_.curr.height()+30}, 250,'easeOutCubic');*/
                content.stop().delay(0).css({height:_.curr.height()+0});
                thums.stop().delay().animate({left:'-1620px'}, 650,'easeOutCubic');
            }
            
        	if(_.curr){
        	   h = parseInt( _.curr.outerHeight(true)+160);
				$(window).trigger('resize');
				_.curr
					.stop()
					.delay(aniDelay).css({'visibility':'visible', top:-content.height()-500}).animate({top:'0px'}, 650,'easeOutCubic');
            }

            
			if(_.prev){
			    _.prev 
    				.stop()
    				.animate({top:content.height()+500}, 350,'easeInSine', function(){
    				     $(this).css({'visibility':'hidden'});
    			     });
            }
           
        }
		
	})
       
    nav.navs(function(n, _)
    {
		content.tabs(n);
	})
    
 
})