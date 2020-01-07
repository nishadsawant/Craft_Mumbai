"use strict";


$(function(){
	$(document.body).append('<div id="referenceM"><a class="close_ref"></a><ul><li><span>[1]</span>Bitzer J et al. Women’s attitudes towards heavy menstrual bleeding, and their impact on quality of life. Open Access J Contraception. 2013;4:21–28.</li><li><span>[2]</span>Reid PC et al. Randomised comparative trial of the levonorgestrel intrauterine system and mefenamic acid for the treatment of idiopathic menorrhagia: a multiple analysis using total menstrual fluid loss, menstrual blood loss and pictorial blood loss assessment charts. BJOG. 2005;112:1121–1125.</li><li><span>[3]</span>NICE CG 44. Heavy menstrual bleeding: assessment and management, 2007.</li><li><span>[4]</span>Hickey M, The Cochrane Library,2007, Issue 4 http://www.thecochranelibrary.com</li><li><span>[5]</span>Xu, Ling, et al. International Journal of Women’s Health. 2014.</li><li><span>[6]</span>Hurskainen R et al. Acta Obstet Gynecol Scand 2007;86:749–757.</li><li><span>[7]</span>Souhrn údajů o přípravku Mirena<sup>&reg;</sup>.</li></ul></div>');
	
	
	$('#referenceM ul').on({
        touchstart: function(e){
            var $this=$(this),scrollHeight=$this.get(0).scrollHeight-
                (
                    parseInt($this.css('margin-top')) +
                    parseInt($this.css('margin-bottom')) +
                    parseInt($this.css('padding-bottom')) +
                    parseInt($this.css('padding-top'))
                );
           
            if(!(scrollHeight>$this.height())){
                e.stopPropagation(); e.preventDefault();
            }else{
                if(e.currentTarget.scrollTop===0){
                    e.currentTarget.scrollTop=1;
                }else if(e.currentTarget.scrollHeight===e.currentTarget.scrollTop +
                e.currentTarget.offsetHeight){
                    e.currentTarget.scrollTop-=1;
                }
            }
        },
        touchmove: function(e){
            e.stopPropagation();
        },
        touchend: function(e){
            e.stopPropagation();
        }
    });
	
	
	$(".refM").click(function(){
		$('#referenceM').animate({"top":"0px"});
	});
	$(".close_ref").click(function(){
		$('#referenceM').animate({"top":"800px"});
	});
	
	
});