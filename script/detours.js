$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

    $.fn.scrollPath("getPath")
        // start element
        .moveTo(4339, 882, {name: "start"}) // 109 eraf bij x om ruimte te maken voor een bocht van 150
        // Arc naar beneden richting 'info'
        .arc(4339, 1032, 150, 1.5*Math.PI, 0, false, {rotate: -0.5*Math.PI }) 		

        // Lijn naar 'info' element
        .lineTo(4489, 3202, {name: "info"})
        // Lijn naar eerste bocht ri. practicalities
        .lineTo(4489, 4805) // = y-41 // 109 eraf bij y
        .arc(4339, 4825, 150, 0, Math.PI/2, false, {rotate: -1*Math.PI }) //-109 bij x -
        .lineTo(4074,4975) // 109 eraf by x
        .arc(4074,5125,150, 1.5*Math.PI, Math.PI, true, {rotate: -0.5*Math.PI })
        .lineTo(3924,5788)
        .arc(3774,5788,150, 0, Math.PI/2, false, {rotate: -1*Math.PI })
        // Lijn naar centrum practicalities
        .lineTo(3402,5938, {name: "pract"})
        .lineTo(1644,5938)
        .arc(1644,5788,150, Math.PI/2, Math.PI, false, {rotate: -1.5*Math.PI })
        .lineTo(1494,4601)
        .arc(1644,4601,150, Math.PI, 1.5*Math.PI, false, {rotate: -2*Math.PI })
        // Lijn naar centrum tours
        .lineTo(2002,4451, {name: "tours"})
        .lineTo(2062,4451)
        .arc(2062,4601,150, 1.5*Math.PI, 0, false, {rotate: -2.5*Math.PI })
        .lineTo(2212,5292)
        .arc(2361,5292,150, Math.PI, Math.PI/2, true, {rotate: -2*Math.PI })
        .lineTo(4945,5442)
        .arc(4945,5592,150, 1.5*Math.PI, 0, false, {rotate: -2.5*Math.PI })
        //Lijn naar centrum photos
        .lineTo(5095,6294, {name: "photos"})
        .arc(4945,6294,150, 0, Math.PI/2, false, {rotate: -3*Math.PI })
        .lineTo(759,6444)
        .arc(759,6294,150,Math.PI/2,Math.PI,false, {rotate: -3.5*Math.PI })
        //Lijn naar centrum l&l
        .lineTo(609,2585,{name: "landl"})
        .lineTo(609,1032)
        .arc(759,1032,150,Math.PI,1.5*Math.PI,false, {rotate: -4*Math.PI })
        //Lijn naar centrum reviews
        .lineTo(2238,882,{name: "reviews"})
        .lineTo(4339,882,{name: "end"});

    // We're done with the path, let's initate the plugin on our wrapper element
    $(".wrapper").scrollPath({drawPath: false, wrapAround: true});     

    // Add scrollTo on click on the navigation anchors
    $("nav").find("a").each(function() {
        if ($(this).hasClass('path-switch')) {
        }
        else {
            var target = $(this).attr("href").replace("#", "");
            $(this).click(function(e) {
                e.preventDefault();
                // Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
                // for extra easing functions like the one below
                $.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
            });
        };
    });
    extraLijnen();

};
        
$(".path-switch").on("click", function(e) {
    e.preventDefault();
    $(".sp-canvas").toggle();
    if ($(this).hasClass('show-path')) {
         $(this).text("Hide Path").addClass('hide-path').removeClass('show-path');
    }
    else {
         $(this).html("Show Path").addClass('show-path').removeClass('hide-path');
    }
});

	/* ===================================================================== */

function extraLijnen() {
    console.log('extralijnen fired');
    var canvas = document.getElementById('detours-canvas');
    if (canvas) {
        //alert('There is a canvas. But is there a context?');
        console.log('yoyoyo');
        ctx = canvas.getContext('2d');
        if (!ctx) {
            console.log('There is no context!');
        }
        else {
            if (!ctx.setLineDash) {
                ctx.setLineDash = function () {};
            };
            ctx.beginPath();
            console.log('line starts at 5292,0');
            ctx.moveTo(5292,0);         
            ctx.arc(5292,0,20,1.5*Math.PI,0*Math.PI); //8
            ctx.arc(5330,191,20,1*Math.PI,0.5*Math.PI,true); //10
            ctx.arc(7133,231,20,1.5*Math.PI,0*Math.PI); //11
            ctx.arc(7173,447,20,1*Math.PI,0.5*Math.PI,true); //17
            ctx.arc(7337,487,20,1.5*Math.PI,0*Math.PI); //18
            ctx.arc(7377,1309,20,1*Math.PI,0.5*Math.PI,true); //27
            ctx.arc(7680,1309,20,0.5*Math.PI,0*Math.PI,true); //28
            ctx.arc(7680,184,20,0*Math.PI,1.5*Math.PI,true); //12
            ctx.arc(293,184,20,1.5*Math.PI,1*Math.PI,true); //9
            ctx.arc(293,3924,20,1*Math.PI,0.5*Math.PI,true); //36
            /* EO line 1 */
            /* line 2ish */
            ctx.moveTo(5837,792);
            ctx.arc(5837,792,20,0*Math.PI,0.5*Math.PI); //26
            ctx.arc(3215,832,20,1.5*Math.PI,1*Math.PI,true); //20
            ctx.arc(3175,4097,20,0*Math.PI,0.5*Math.PI); //58
            ctx.arc(875,4097,20,0.5*Math.PI,1*Math.PI); //45
            ctx.arc(875,3741,20,1*Math.PI,1.5*Math.PI); //37
            ctx.arc(4558,3702,20,0.5*Math.PI,0*Math.PI,true); //43
            ctx.arc(4598,3537,20,1*Math.PI,1.5*Math.PI); //40
            ctx.arc(4814,3497,20,0.5*Math.PI,0*Math.PI,true); //39
            ctx.arc(4815,1033,20,0*Math.PI,1.5*Math.PI,true); //23
            ctx.arc(4783,993,20,0.5*Math.PI,1*Math.PI); //22
            ctx.arc(4743,905,20,0*Math.PI,1.5*Math.PI,true); //21
            ctx.arc(1453,865,20,0.5*Math.PI,1*Math.PI); //19
            ctx.lineTo(1433,0); //6

            /* EO line 1 */
             /* line 3 */
            ctx.moveTo(0,3346);
            ctx.arc(2903,3346,20,1.5*Math.PI,0*Math.PI); //76
            ctx.arc(2943,5991,20,1*Math.PI,0.5*Math.PI,true); //59
            ctx.arc(3109,6031,20,1.5*Math.PI,0*Math.PI); //60
            ctx.arc(3148,6246,20,1*Math.PI,0.5*Math.PI,true); //62
            ctx.arc(4456,6286,20,1.5*Math.PI,0*Math.PI); //65
            ctx.arc(4456,6500,20,0*Math.PI,0.5*Math.PI); //67
            ctx.arc(2389,6500,20,0.5*Math.PI,1*Math.PI); //66
            ctx.arc(2369,4311,20,0*Math.PI,1.5*Math.PI,true); //48
            ctx.arc(2336,4271,20,0.5*Math.PI,1*Math.PI); //47
            /* EO line 3 */
            /* line 4 */
            ctx.moveTo(5452,5412);
            ctx.arc(5452,5412,20,0*Math.PI,1.5*Math.PI,true); //56
            ctx.arc(3851,5374,20,0.5*Math.PI,1*Math.PI); //54
            ctx.arc(3851,3608,20,1*Math.PI,1.5*Math.PI); //38
            ctx.arc(4686,3569,20,0.5*Math.PI,0*Math.PI,true); //42
            ctx.arc(4726,3537,20,1*Math.PI,1.5*Math.PI); //41            
            /* EO line 4 */
            /* line 5 */
            ctx.moveTo(7204,360);
            ctx.arc(7204,360,20,0*Math.PI,1.5*Math.PI,true); //16
            ctx.arc(7173,320,20,0.5*Math.PI,1*Math.PI); //15
            /* EO line 5 */
                        /* line 6 */                
            ctx.moveTo(409,2272);
            ctx.arc(429,2252,20,0.5*Math.PI,0*Math.PI,true); //33
            ctx.arc(469,2219,20,1*Math.PI,1.5*Math.PI); //32
            ctx.arc(4861,2218,20,1.5*Math.PI,0*Math.PI); //35
            ctx.arc(4862,4196,20,0*Math.PI,0.5*Math.PI); //52
            ctx.arc(4335,4234,20,1.5*Math.PI,1*Math.PI,true); //51
            ctx.arc(4298,6294,20,0*Math.PI,0.5*Math.PI); //64
            ctx.arc(731,6294,20,0.5*Math.PI,1*Math.PI); //57
            ctx.arc(731,4181,20,1*Math.PI,1.5*Math.PI); //44
            ctx.arc(2296,4181,20,1.5*Math.PI,0*Math.PI); //46
            ctx.arc(2336,4398,20,1*Math.PI,0.5*Math.PI,true); //49
            ctx.arc(2502,4438,20,1.5*Math.PI,0*Math.PI); //50
            ctx.arc(2541,5254,20,1*Math.PI,0.5*Math.PI,true); //53
            ctx.arc(5406,5292,20,1.5*Math.PI,0*Math.PI); //55
            ctx.arc(5405,6588,20,0*Math.PI,0.5*Math.PI); //74
            ctx.arc(5188,6628,20,1.5*Math.PI,1*Math.PI,true); //71
            ctx.arc(5148,6795,20,0*Math.PI,0.5*Math.PI); //70
            ctx.arc(338,6795,20,0.5*Math.PI,1*Math.PI); //69
            ctx.arc(340,2292,20,1*Math.PI,1.5*Math.PI); //31
            ctx.arc(556,2252,20,0.5*Math.PI,0*Math.PI,true); //34
            ctx.arc(596,2086,20,1*Math.PI,1.5*Math.PI); //29
            ctx.arc(4949,2047,20,0.5*Math.PI,0*Math.PI,true); //30
            ctx.arc(4949,1160,20,0*Math.PI,1.5*Math.PI,true); //25
            ctx.arc(4783,1120,20,0.5*Math.PI,1*Math.PI); //24
            ctx.lineTo(4763,993);
            /* EO line 6 */
            /* line 7 */   
            ctx.moveTo(3129,6198);
            ctx.arc(3109,6178,20,0*Math.PI,1.5*Math.PI,true); //63
            ctx.arc(3077,6138,20,0.5*Math.PI,1*Math.PI); //61
            ctx.arc(3077,441,20,0*Math.PI,1.5*Math.PI,true); //14
            ctx.arc(-28,441,20,1.5*Math.PI,1*Math.PI,true); //13
            ctx.arc(-28,6661,20,1*Math.PI,0.5*Math.PI,true); //68
            ctx.arc(5276,6661,20,0.5*Math.PI,0*Math.PI,true); //72
            ctx.arc(5316,6628,20,1*Math.PI,1.5*Math.PI); //73
            /*
            ctx.arc(2036,-1295,20,1.5*Math.PI,0*Math.PI); //1
            ctx.arc(2076,-630,20,1*Math.PI,0.5*Math.PI,true); //2
            ctx.arc(2242,-590,20,1.5*Math.PI,0*Math.PI); //3
            ctx.arc(2282,-373,20,1*Math.PI,0.5*Math.PI,true); //5
            ctx.arc(1453,-288,20,1*Math.PI,1.5*Math.PI); //6
            ctx.arc(5837,-333,20,1.5*Math.PI,0*Math.PI); //7


            */
            ctx.lineWidth=5;
            ctx.setLineDash([2,10]);
            ctx.strokeStyle="white";
            ctx.stroke();
        }
    }
    else {
        alert('There is no canvas (yet)!');
    }
};