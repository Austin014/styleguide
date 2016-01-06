//$(document).ready(function () {
//    //this is converting the RGBA code to Hex code, just let it do its thing.
//            //pulled from this-- http://jsfiddle.net/Mottie/xcqpF/1/light/
//            function rgb2hex(rgb) {
//                rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
//                return (rgb && rgb.length === 4) ? "#" +
//                    ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
//                    ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
//                    ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
//            };
//
//            function typefunct(element) {
//                var typefont = $(element).css("font-family");
//                var typeweight = $(element).css("font-weight");
//                var typesize = $(element).css("font-size");
//                var typecolor = rgb2hex($(element).css("color"));
//                $(element).append("<div class='typeinfo'>" + typefont + " | " + typeweight + " | " + typesize + " | " + typecolor + "</div>");
//            };
//
//            function colorappend(tilenumber) {
//                var tilecolor = rgb2hex($(tilenumber).css("background-color"));
//                $(tilenumber).parent().append("<span class='colorvalue'>" + tilecolor + "</span>");
//            };
//
//
//            //this opens up a prompt with the hex code of the swatch you clicked on, making it easy to copy color values
//            function copytoprompt(tile) {
//                var copycolor = rgb2hex($(tile).css("background-color"));
//                prompt("Copy the hex code and press enter!", copycolor);
//            };
//            $('.colorswatch').click(function () {
//                copytoprompt($(this));
//            });
//
//    
//});