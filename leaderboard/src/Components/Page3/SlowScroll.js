import {react, useEffect} from "react";

export default function SlowScroll() {

        window.scrollBy(0,1);
        let scrolldelay = setTimeout(SlowScroll,50);


}