/**
 * Created by Lumpychen on 16/2/22.
 */
(function(){
    function imageLoaded(url, callback) {
        var img = new Image();
        img.src = url;

        if (img.complete) {
            callback();
            return;
        }

        img.onload = function (){
            callback();//将回调函数的this替换为Image对象
        };
    };





    function renderAll(){
        $('#load-wrap').fadeOut(2000, function () {
            $('#content-wrap').fadeIn(3000);
        })
    }


    window.onload = function () {
        imageLoaded("img/lumpy-bw.png",renderAll);
    };

})()




