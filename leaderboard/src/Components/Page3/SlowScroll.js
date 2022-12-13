import {react, useEffect} from "react";

var prevPosition;
var position;
export default function SlowScroll() {

                if(prevPosition > position) {
                        window.scrollTo(0, prevPosition)
                }
                
                prevPosition = window.scrollY;
                window.scrollBy(0, 1);
                let scrolldelay = setTimeout(SlowScroll,50);
                position = window.scrollY;
        


}