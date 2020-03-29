(function() {
    var container = $('#container');
    var slider = $('#slider');
    var topImg = $('#top-image');


    topImg.css ({
        width: 300 + 'px'
    });

    slider.mousedown(function () {

        container.mousemove(function (e){

            if (e.clientX <= container.width() + container.offset().left -5 ) {

                slider.css ({
                    left: e.clientX - 10 + 'px'
                });

            }
            topImg.css ({
                width: e.clientX + 'px'
            });

        });

    });

    topImg.css ({
        width: 300 + 'px'
    });

}());
