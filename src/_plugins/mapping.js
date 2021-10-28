! function (t) {
    t.fn.mapping = function (e) {
        var i = t.extend({}, {}, e),
            n = {
                selector: t(this),
                department: "",
                destination: "",
                from: function (e) {
                    try {
                        return this.department = t(e), this
                    } catch (t) {}
                },
                to: function (e) {
                    try {
                        return this.destination = t(e), this
                    } catch (t) {}
                },
                use: function (t) {
                    try {
                        switch (t) {
                            case "appendTo":
                                this.department.appendTo(this.destination);
                                break;
                            case "prependTo":
                                this.department.prependTo(this.destination);
                                break;
                            case "insertAfter":
                                this.department.insertAfter(this.destination);
                                break;
                            case "insertBefore":
                                this.department.insertBefore(this.destination)
                        }
                    } catch (t) {}
                }
            };
        return this.switch = function (t) {
            t.matches ? n.from(n.selector).to(i.mobileWrapper).use(i.mobileMethod) : n.from(n.selector).to(i.desktopWrapper).use(i.desktopMethod)
        }, this.initialize = function () {
            var t = window.matchMedia("(max-width: " + i.breakpoint + "px)");
            return this.switch(t), t.addListener(this.switch), this
        }, this.initialize()
    }
}(jQuery);

// $('selector').mapping({
//     mobileWrapper: '.header .mobile-wrapper',
//     mobileMethod: 'appendTo',
//     desktopWrapper: '.header .desktop-wrapper',
//     desktopMethod: 'appendTo',
//     breakpoint: 1025
// })
/*
* rwdImageMaps jQuery plugin v1.6
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){a.fn.rwdImageMaps=function(){var c=this;var b=function(){c.each(function(){if(typeof(a(this).attr("usemap"))=="undefined"){return}var e=this,d=a(e);a("<img />").on('load',function(){var g="width",m="height",n=d.attr(g),j=d.attr(m);if(!n||!j){var o=new Image();o.src=d.attr("src");if(!n){n=o.width}if(!j){j=o.height}}var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";a('map[name="'+i+'"]').find("area").each(function(){var r=a(this);if(!r.data(l)){r.data(l,r.attr(l))}var q=r.data(l).split(","),p=new Array(q.length);for(var h=0;h<p.length;++h){if(h%2===0){p[h]=parseInt(((q[h]/n)*100)*f)}else{p[h]=parseInt(((q[h]/j)*100)*k)}}r.attr(l,p.toString())})}).attr("src",d.attr("src"))})};a(window).resize(b).trigger("resize");return this}})(jQuery);