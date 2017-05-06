$(document).ready(function(){
    

    var clicked=false;
    var position = null;
    var frame = null;

    $('.something').click(function() {
    if ( $(window).width() > 769){
      var frame = this;
      var id=$(frame).attr('id');
      console.log(frame);
      if(!clicked){
        
        var first = function(){
            var q = $.Deferred()
            position=frame.style.left;
            console.log(position);
           $(frame).siblings().hide();
           $(".something h4").hide();
           $(frame).animate({
                left: '17.5%'
           });
            $(".profilePhoto").css({filter: "grayscale(0%)"});
           setTimeout(function () {
                    q.resolve();
                }, 400);
           return q
        }

        var second = function(){
       
           $(".profileText").fadeIn();
           
        }

        first().done(second);
        clicked=true;
        jQuery(this).attr("id","clickedFrame");
    }

        else{
        
        var FunctionOne = function () {
            // create a deferred object
            var r = $.Deferred();
            $(".profileText").css({display: "none"});
            $(frame).animate({
                left: position,
            }, "slow"),
            setTimeout(function () {
                r.resolve();
            }, 700);

            return r;
        };

        var FunctionTwo = function () {
            $(".profileText").css({display: "none"});
            $(".profilePhoto").css({filter: "grayscale(100%)"});
            $(frame).siblings().fadeIn("fast");
            $(".profileText").css({display: "none"});
            $(".profileText").hide();
            $(".something h4").show();
        };

        FunctionOne().done(FunctionTwo);
        $("#clickedFrame").removeAttr('id');

        clicked=false;


       }
   }
    });

    $('#exit').click(function(){
        var FunctionOne = function () {
            var r = $.Deferred();
            $(".profileText").css({display: "none"});
            $("#clickedFrame").animate({
                left: position,
            }, "slow"),
            setTimeout(function () {
                r.resolve();
            }, 700);

            return r;
        };

        var FunctionTwo = function () {
            $(".profileText").css({display: "none"});
            $(".profilePhoto").css({filter: "grayscale(100%)"});
            $(".something").siblings().fadeIn("fast");
            $(".profileText").hide();
            $(".something h4").show();
        };

        FunctionOne().done(FunctionTwo);
        $("#clickedFrame").removeAttr('id');

        clicked=false;
    });


});

