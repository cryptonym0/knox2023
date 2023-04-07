function iframeAutoScale() {

    'use strict';

    var
        iframes = document.getElementsByTagName('iframe'),
        index = 0;

    if (iframes.length > 0) {
        for (index = 0; index < iframes.length; index++) {
            var
                iframe = iframes[index],
                parent = iframe.parentElement,
                parentPadding = parseInt(window.getComputedStyle(parent, null).getPropertyValue('padding-left')) + parseInt(window.getComputedStyle(parent, null).getPropertyValue('padding-right')),
                parentWidth = parent.clientWidth - parentPadding,
                ratio = 0.75,	// default ratio (4:3)
                width = iframe.clientWidth,
                height = iframe.clientHeight;

            // overwrite default ratio if width and height attributes are not set
            if (width !== undefined && height !== undefined) {
                ratio = height / width;
            }

            iframe.setAttribute('width', parentWidth);
            iframe.setAttribute('height', parentWidth * ratio);
        }
    }
}

// onload
document.addEventListener('DOMContentLoaded', function () {
    iframeAutoScale();
}, false);

// on window resize
window.onresize = function(event) {
    iframeAutoScale();
};
