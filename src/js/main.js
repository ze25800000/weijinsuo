$(function () {
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#ad > .carousel-inner > .item').each(function (i, item) {
            // 因为拿到是DOM对象 需要转换
            var $item = $(item);
            // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
            // 设置背景图片
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            //
            // 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
    }

    resize();
    window.onresize = resize;
    /**
     * 控制标签页的容器宽度
     * */
    var $ulContainer = $('.nav-tabs');
    var width = 0;
    $ulContainer.children().each(function (index, element) {
        width += element.clientWidth;
    });
    if (width > $(window).width()) {
        $ulContainer.css('width', width + 40).parent().css('overflow-x', 'scroll');
    }
    $('#news .nav-pills a').on('click', function () {
        $('.news-title').text($(this).parent().data('title'));
    });
});
