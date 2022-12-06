import react from "react";

export default function JumpTop() {
       window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            // you're at the bottom of the page
            window.scrollTo(0, 0)
        }
    };
}