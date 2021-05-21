// init scroll effects //
import AOS from "aos";

AOS.init({
    disable: function () {
        let maxWidth = 1000;
        return window.innerWidth < maxWidth;
    }
});