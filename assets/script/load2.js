/**
 * Created by Lumpychen on 16/2/22.
 */
(function(){

    var counter = 0;
    var length = 0;

    function imageLoaded(urlArr, callback) {

        var imgArr = urlArr.map(function (ele) {
            var img = new Image();
            img.src = ele;
            return img
        })


        imgArr.forEach(function (img) {
            if (img.complete) {
                counter += 1;
                if(counter == imgArr.length) {
                    callback();
                    return;
                }
            }
        })



        //img.onload = function (){
        //    callback();//将回调函数的this替换为Image对象
        //};
    };





    function renderAll(){
        $('#load-wrap').fadeOut(10000, function () {
            $('#content-wrap').animate({"opacity":1},4000)
        })
    }


    window.onload = function () {
        var arr=[
            'img/lumpy-bw-trans.png',
            "img/trance.png",
            "img/linkin.jpg",
            "img/linux.png",
            "img/css.png",
            "img/js.png",
            "img/nodejs.png",
            "img/css.png",
            "img/ng.png",
            "img/essay.png",
            "img/business.png"
        ]
        imageLoaded(arr,renderAll);
    };

})()




