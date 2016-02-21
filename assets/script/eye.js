/**
 * Created by Lumpychen on 16/2/18.
 */
$(function(){

    function makeMove(x,y,$obj,rad,left,top,line){

        var xx = $obj.offset().left+line;
        var yy = $obj.offset().top+line;

        var length = Math.sqrt((x-xx)*(x-xx)+(y-yy)*(y-yy));

        var x1 = rad * (x - xx) / length;
        var y1 = rad * (y - yy) / length;

        var theTop = $obj.offset().top;
        var theLeft = $obj.offset().left;

        var fixLeft = theLeft+left+line;
        var fixTop = theTop+top+line;
        var fixLength = Math.sqrt((x-fixLeft)*(x-fixLeft)+(y-fixTop)*(y-fixTop));


        if(fixLength<rad){


            $obj.css({'top':y-theTop-line+'px', 'left':x-theLeft-line+'px'});

        }
        else {

            $obj.css({'top': top + y1 + 'px', 'left': left + x1 + 'px'});
        }

    };

    function getGoing(){
        $('#logo>h1').fadeIn(1000);
        $('#eye').animate({'top': 147+'px', 'left': 324+'px'},1000);
        $('#eye2').animate({'top': 190+'px', 'left': 226+'px','z-index':'-10'},1000);

        $('body').unbind('mousemove');

        setInterval(function(){
            $('.eyeskin').animate({'top': 195.5+'px'},100)
            $('.img .eyeskin:first-of-type').animate({'top': 177+'px'},100)
            $('.img .eyeskin:last-of-type').animate({'top': 214.5+'px'},100)
        },3000)
    }


    $('body').mousemove(function (e) {

        var x = e.pageX;
        var y = e.pageY;


        makeMove(x,y,$('#eye'),8,324,147,50);
        makeMove(x,y,$('#eye2'),16,226,190,15);


    })


    $('body').one('click',function(){
        $('nav').animate({'top':'0px'},4000)
        $('.site-copyright').animate({'bottom':'0px'},4000);
        getGoing();
    });

})
