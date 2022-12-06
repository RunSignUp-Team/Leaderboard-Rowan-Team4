import react from "react";




export default function scrollToBottom(timedelay=1000000000) {
    var scrollId;
    var height = 0;
    var minScrollHeight = 1;
    scrollId = setInterval(function () {
        if (height <= document.body.scrollHeight) {
            window.scrollBy(0, minScrollHeight);
        }
        else {
            clearInterval(scrollId);
        }
        height += minScrollHeight;
    }, timedelay);           
}