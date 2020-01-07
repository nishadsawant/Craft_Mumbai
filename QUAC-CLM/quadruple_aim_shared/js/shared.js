// JavaScript Document
document.ontouchmove = function(e) {
    e.preventDefault();
};

var touchstartOrClick = "";
var isiPad = navigator.platform.indexOf("iPad") != -1;
isiPad ? touchstartOrClick = "touchstart" : touchstartOrClick = "click";

var count = 0;
var ready = true;
$(document).ready(function() {
  //Header Function

    $(".slider").bind(touchstartOrClick, function(event) {

        event.preventDefault();
        if ($(this).hasClass("isDown")) {
            $("#nav").stop().animate({
                top: "0px"
            }, 500);
            $(".slider").stop().animate({
                top: "69px"
            }, 500);
        } else {
            $("#nav").stop().animate({
                top: "-70px"
            }, 500);
            $(".slider").stop().animate({
                top: "0px"
            }, 500);
        }
        $(this).toggleClass("isDown");
        return false;
    });
//Footer Function 
    $(".sliderFooter").bind(touchstartOrClick, function(event) {

        event.preventDefault();
        if ($(this).hasClass("isDown")) {
            $("footer").stop().animate({
                bottom: "0px"
            }, 500);
            $(".sliderFooter").stop().animate({
                top: "687px"
            }, 500);
            $(".videoWindow").stop().animate({
                top: "768px"
            }, 500);
        } else {
            $("footer").stop().animate({
                bottom: "-55px"
            }, 500);
            $(".sliderFooter").stop().animate({
                top: "742px"
            }, 500);
            $(".videoWindow").stop().animate({
                top: "768px"
            }, 500);
            $(".mailWindow").stop().animate({
                top: "768px"
            }, 500);
            $(".ReferenceLibrary").stop().animate({
                top: "768px"
            }, 500);
            $(".thumbnailWindow").stop().animate({
                top: "768px"
            }, 500);
            $(".searchPdf").stop().animate({
                top: "768px"
            }, 500);
            $(".FrequentlyAskedQuestions").stop().animate({
                top: "768px"
            }, 500);
			$(".toolWindow").stop().animate({
                top: "768px"
            }, 500);
			

            $(".video").removeClass("videoActive");
            $(".thumbnail").removeClass("thumbnailActive");
            $(".lib").removeClass("searchActive");
            $(".qa").removeClass("qaActive");
            $(".info").removeClass("infoActive");
            $(".mail").removeClass("mailActive");
			 $(".tool").removeClass("toolActive");


            $(".patchthumb").addClass("hide");
            $(".patch").addClass("hide");
            $(".patchsearch").addClass("hide");
            $(".patchqa").addClass("hide");
            $(".patchinfo").addClass("hide");
            $(".patchmail").addClass("hide");
			$(".patchtool").addClass("hide");
			



        }
        $(this).toggleClass("isDown");
        return false;
    });
	
	//Previous Function
	$(".prev").bind(touchstartOrClick, function() {
	 JSprevSlide();
 });
function JSprevSlide(){
  com.veeva.clm.prevSlide();
}                  

    //Next Button Function
    $(".next").bind(touchstartOrClick, function() {
        $("footer").stop().animate({
            bottom: "-55px"
        }, 500);
        $(".sliderFooter").stop().animate({
            top: "742px"
        }, 500);
    });
    //Reference Window

    $(".info").bind(touchstartOrClick, function() {
        if ($(this).hasClass("infoActive")) {
            navtogle();
            $(this).removeClass("infoActive");
            $(".ReferenceLibrary").stop().animate({
                top: "768px"
            }, 500);
            $("#nav").stop().animate({
                top: "0px"
            }, 500);
            $(".slider").stop().animate({
                top: "69px"
            }, 500);

        } else {
            navtogle();
            $(this).addClass("infoActive");
            $(".patchinfo").removeClass("hide");

            $("footer").stop().animate({
                bottom: "655px"
            }, 500);
            $(".sliderFooter").stop().animate({
                top: "32px"
            }, 500);
            $(".ReferenceLibrary").stop().animate({
                top: "113px"
            }, 500);
        }

    });

    //Single PDF Function
    $(".pdflink").bind(touchstartOrClick, function() {
        window.open('assets/pdf/SmPCSlide.pdf', '_self', 'fullscreen=yes');
    });
    //Multiple PDF Function
    $(".first").bind(touchstartOrClick, function() {
        window.open('assets/pdf/1 Mansour Int J Women Health 2014.pdf', '_self', 'fullscreen=yes');
    });
    $(".onep").bind(touchstartOrClick, function() {
        window.open('assets/pdf/2 Kyleena_EU_SmPC_status Day200.pdf', '_self', 'fullscreen=yes');
    });
    $(".twop").bind(touchstartOrClick, function() {
        window.open('assets/pdf/3 Cristobal I et al. Eur J Obstet Gynaecol Reprod Biol 2015_190_58-64.pdf', '_self', 'fullscreen=yes');
    });
    $(".three").bind(touchstartOrClick, function() {
        window.open('assets/pdf/4 MirenaCCDS14.pdf', '_self', 'fullscreen=yes');
    });
    $(".four").bind(touchstartOrClick, function() {
        window.open('assets/pdf/5 Sedgh et al 2014.pdf', '_self', 'fullscreen=yes');
    });
    $(".five").bind(touchstartOrClick, function() {
        window.open('assets/pdf/6 Finer LB and Henshaw SK 2006.pdf', '_self', 'fullscreen=yes');
    });
    $(".six").bind(touchstartOrClick, function() {
        window.open('assets/pdf/7 Sedgh G et al. Perspect Sex Reprod Health 2013 Mar_45_1_13-22.pdf', '_self', 'fullscreen=yes');
    });
    $(".seven").bind(touchstartOrClick, function() {
        window.open('assets/pdf/8 Hooper 2010.pdf', '_self', 'fullscreen=yes');
    });
    $(".eight").bind(touchstartOrClick, function() {
        window.open('assets/pdf/9 Gemzell et al. nullips subanalysis_FINAL.pdf', '_self', 'fullscreen=yes');
    });
    $(".nine").bind(touchstartOrClick, function() {
        window.open('assets/pdf/10 NelsonA-2013-ObstetGynecol-v122p1205.pdf', '_self', 'fullscreen=yes');
    });
    $(".ten").bind(touchstartOrClick, function() {
        window.open('assets/pdf/11 Jaydess SmPC_example.pdf', '_self', 'fullscreen=yes');
    });
    $(".eleven").bind(touchstartOrClick, function() {
        window.open('assets/pdf/12 TrussellJ-2011-Contraception-v83p397.pdf', '_self', 'fullscreen=yes');
    });

    $(".thirteen").bind(touchstartOrClick, function() {
        window.open('assets/pdf/14 Gemzell-DanielssonK-2012-FertilSteril-Epub.pdf', '_self', 'fullscreen=yes');
    });


    //Q&A Toggle Function
    $(".a").hide();
    $("h2").bind(touchstartOrClick, function() {
        $(this).next().toggle();
    });
    $(".qa").bind(touchstartOrClick, function() {
        if ($(this).hasClass("qaActive")) {
            navtogle();
            $(this).removeClass("qaActive");
            $(".FrequentlyAskedQuestions").stop().animate({
                top: "768px"
            }, 500);
            $("#nav").stop().animate({
                top: "0px"
            }, 500);
            $(".slider").stop().animate({
                top: "69px"
            }, 500);

        } else {
            navtogle();
            $(this).addClass("qaActive");
            $(".patchqa").removeClass("hide");

            $("footer").stop().animate({
                bottom: "655px"
            }, 500);
            $(".sliderFooter").stop().animate({
                top: "32px"
            }, 500);
            $(".FrequentlyAskedQuestions").stop().animate({
                top: "113px"
            }, 500);
        }

    });

    //PDF Search Function
    $(".lib").bind(touchstartOrClick, function() {
        if ($(this).hasClass("searchActive")) {
            navtogle();
            $(this).removeClass("searchActive");
            $(".searchPdf").stop().animate({
                top: "768px"
            }, 500);
            $("#nav").stop().animate({
                top: "0px"
            }, 500);
            $(".slider").stop().animate({
                top: "69px"
            }, 500);

        } else {
            navtogle();
            $(this).addClass("searchActive");
            $(".patchsearch").removeClass("hide");

            $("footer").stop().animate({
                bottom: "655px"
            }, 500);
            $(".sliderFooter").stop().animate({
                top: "32px"
            }, 500);
            $(".searchPdf").stop().animate({
                top: "113px"
            }, 500);
        }

    });
    //Serach Functionality for PDF
    $("#txt").on("keyup", function() {
        var srchTerm = $(this).val(),
            $rows = $("#lst").children("li");
        if (srchTerm.length > 0) {
            $rows.stop().hide();
            $("#lst").find("li:containsi('" + srchTerm + "')").stop().show();
        } else {
            $rows.stop().show();
        }
    });
    //Email Function


    $(".mail").bind(touchstartOrClick, function() {
        if ($(this).hasClass("mailActive")) {
            navtogle();
            $(this).removeClass("mailActive");
            $(".mailWindow").stop().animate({
                top: "768px"
            }, 500);
            $("#nav").stop().animate({
                top: "0px"
            }, 500);
            $(".slider").stop().animate({
                top: "69px"
            }, 500);

        } else {
            navtogle();
            $(this).addClass("mailActive");
            $(".patchmail").removeClass("hide");

            $("footer").stop().animate({
                bottom: "655px"
            }, 500);
            $(".sliderFooter").stop().animate({
                top: "32px"
            }, 500);
            $(".mailWindow").stop().animate({
                top: "113px"
            }, 500);
        }

    });
    //Video Function
    function navtogle() {
        event.preventDefault();
        if ($(this).hasClass("isDown")) {
            $("#nav").stop().animate({
                top: "0px"
            }, 500);
            $(".slider").stop().animate({
                top: "69px"
            }, 500);
        } else {
            $("#nav").stop().animate({
                top: "-70px"
            }, 500);
            $(".slider").stop().animate({
                top: "0px"
            }, 500);
        }
        $(this).toggleClass("isDown");
        return false;
    }
    $(".video").bind(touchstartOrClick, function() {
        if ($(this).hasClass("videoActive")) {
            navtogle();
            $(this).removeClass("videoActive");
            $(".videoWindow").stop().animate({
                top: "768px"
            }, 500);
            $("#nav").stop().animate({
                top: "0px"
            }, 500);
            $(".slider").stop().animate({
                top: "69px"
            }, 500);

        } else {
            navtogle();
            $(this).addClass("videoActive");
            $(".patch").removeClass("hide");

            $("footer").stop().animate({
                bottom: "655px"
            }, 500);
            $(".sliderFooter").stop().animate({
                top: "32px"
            }, 500);
            $(".videoWindow").stop().animate({
                top: "113px"
            }, 500);
        }


    });
	//Settings Window
	$(".tool").bind(touchstartOrClick, function() {
        if ($(this).hasClass("toolActive")) {
            navtogle();
            $(this).removeClass("toolActive");


            $(".toolWindow").stop().animate({
                top: "768px"
            }, 500);
            $("#nav").stop().animate({
                top: "0px"
            }, 500);
            $(".slider").stop().animate({
                top: "69px"
            }, 500);
        } else {
            navtogle();
            $(this).addClass("toolActive");
            $(".patchtool").removeClass("hide");

            $("footer").stop().animate({
                bottom: "655px"
            }, 500);
            $(".sliderFooter").stop().animate({
                top: "32px"
            }, 500);
            $(".toolWindow").stop().animate({
                top: "113px"
            }, 500);
        }

    });
    //Thumbnail Window
    $(".thumbnail").bind(touchstartOrClick, function() {
        if ($(this).hasClass("thumbnailActive")) {
            navtogle();
            $(this).removeClass("thumbnailActive");


            $(".thumbnailWindow").stop().animate({
                top: "768px"
            }, 500);
            $("#nav").stop().animate({
                top: "0px"
            }, 500);
            $(".slider").stop().animate({
                top: "69px"
            }, 500);
        } else {
            navtogle();
            $(this).addClass("thumbnailActive");
            $(".patchthumb").removeClass("hide");

            $("footer").stop().animate({
                bottom: "655px"
            }, 500);
            $(".sliderFooter").stop().animate({
                top: "32px"
            }, 500);
            $(".thumbnailWindow").stop().animate({
                top: "113px"
            }, 500);
        }

    });
    $(".collectionOne").bind(touchstartOrClick, function() {
        $(".splashPagethumb").removeClass("hide");
        $(".todaythumb").addClass("hide");
        $(".unwantedthumb").addClass("hide");
        $("#wrapper").addClass("hide");
    });

    $(".collectionTwo").bind(touchstartOrClick, function() {
        $(".todaythumb").removeClass("hide");
        $(".unwantedthumb").addClass("hide");
        $(".splashPagethumb").addClass("hide");
        $("#wrapper").addClass("hide");

    });
    $(".collectionThree").bind(touchstartOrClick, function() {
        $("#wrapper").removeClass("hide");
        $(".unwantedthumb").addClass("hide");
        $(".splashPagethumb").addClass("hide");
        $(".todaythumb").addClass("hide");

    });

    $(".collectionFour").bind(touchstartOrClick, function() {
        $(".unwantedthumb").removeClass("hide");
        $(".todaythumb").addClass("hide");
        $(".splashPagethumb").addClass("hide");
        $("#wrapper").addClass("hide");

    });
    var addclass = 'selectedthumb';
    var $cols = $('.collectionName').bind(touchstartOrClick, function(e) {
        $cols.removeClass(addclass);
        $(this).addClass(addclass);
    });
    //Footer Function
	});