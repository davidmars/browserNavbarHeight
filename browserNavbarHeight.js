/**
 * Calculates the browser navbar height.
 * On desktop it will be zero, on touch devices depends :)
 * @returns {number|*}
 */
export default function browserNavbarHeight(){
    let d,r;
    d=document.createElement("div");
    d.style.height="100vh";
    document.body.appendChild(d);
    r=d.offsetHeight-window.innerHeight;
    d.remove();
    return r;
}

(function() {

    /**
     * Calculates the browser navbar height. and put this value on...
     *  - css variable named --browser-navbar-height and
     *  - javascript variable
     */

    let h=browserNavbarHeight();
    //define css variable
    var html=document.getElementsByTagName("html");
    html[0].style.setProperty("--browser-navbar-height", String(h)+"px");
    window.scroll(0,h);
})();
