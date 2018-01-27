"use strict";



(function() {
    /**
     * Calculates the browser navbar height.
     * On desktop it will be zero, on touch devices depends :)
     * @returns {number|*}
     */
    function browserNavbarHeight(){
        var d,r;
        d=document.createElement("div");

        d.style.height="100vh";
        document.body.appendChild(d);
        r=d.offsetHeight-window.innerHeight;

        document.body.removeChild(d);
        return r;
    }

    /**
     * Calculates the browser navbar height. and put this value on...
     *  - css variable named --browser-navbar-height and
     *  - javascript variable
     */

    var h=browserNavbarHeight();
    //define css variable
    var html=document.getElementsByTagName("html");
    html[0].style.setProperty("--browser-navbar-height", String(h)+"px");
})();
