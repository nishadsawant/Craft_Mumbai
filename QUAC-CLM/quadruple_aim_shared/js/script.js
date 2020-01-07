"use strict";


$(document).ready(function(){
	var dyn_menu = '<ul class="top_menu"><li class="home"><a href="">Home</a></li><li class="practice">Practice<a href=""></a></li><li class="library"><a href="">Library</a></li><li class="email"><a href="">Email</a></li><li class="health_system"><a href="">Health System</a></li></ul>';

	var submenu = '<div class="menu_sec_01"> <div class="sub_head">Quadruple Aim Home</div> <div class="smenu_01">Above Brand</div> <ul class="smenu_01_01"> <li><a href="#">Chronic Conditions Overview</a></li> <li><a href="#">Care Standardization <br>Is Critical</a></li> <li><a href="#">Approach to Evidence-based Care</a></li> </ul> <ul class="smenu_01_02"> <li><a href="#">Chronic Conditions <br>Drive Cost</a></li> </ul> <ul class="smenu_01_03"> <li><a href="#">Patients at Risk for Poor Experiences</a></li> <li><a href="#">Addressing Care Management Process Gaps</a></li> </ul> <ul class="smenu_01_04"> <li><a href="#">Factors Affecting Provider Satisfation</a></li> <li><a href="#">Opportunities to Improve Provider Satisfation</a></li> </ul> </div> <div class="menu_sec_02"> <div class="smenu_01">CardioMetabolic</div> <ul class="smenu_01_01"> <li><a href="#">CV Disease and Comorbidities</a></li> <li><a href="#">CV Disease Risk and Evidence-based Guidelines</a></li> </ul> <ul class="smenu_01_02 mt290"> <li><a href="#">CV Disease Annual Cost</a></li> <li><a href="#">Evaluate Your Health System’s Patient Population</a></li> </ul> <ul class="smenu_01_03 mt433"> <li><a href="#">T2D Patient Journey</a></li> </ul> </div> <div class="menu_sec_03"> <div class="smenu_01">Respiratory</div> <ul class="smenu_01_01"> <li><a href="#">Suboptimal PIF and Inhaler Selection</a></li> </ul> <ul class="smenu_01_02 mt200"> <li><a href="#">COPD Readmission Rates</a></li> <li><a href="#">COPD Risk for Hospitalization</a></li> <li><a href="#">Implementing COPD Care Bundles</a></li> </ul> <ul class="smenu_01_03 mt385"> <li><a href="#">COPD Patient Journey</a></li> <li><a href="#">COPD Patient Support Programs</a></li> </ul> </div> <div class="menu_sec_04"> <div class="smenu_01">Case Studies</div> <ul class="smenu_01_01"> <li><a href="#">Implementing Pathways and Protocols</a></li> <li><a href="#">Managing At-risk Populations</a></li> </ul> <ul class="smenu_01_02 mt263"> <li><a href="#">Reducing Care Variation and Costs</a></li> </ul> <ul class="smenu_01_03 mt350"> <li><a href="#">Improving Patient Satisfaction</a></li> <li><a href="#">Optimizing Transitions of Care</a></li> </ul> <ul class="smenu_01_04 mt487"> <li><a href="#">Implementing SmartForms</a></li> </ul> </div> <div class="menu_sec_05"> <ul class="final_menu"> <li><a href="#">Resource Library</a></li> <li><a href="#">Email Library</a></li> <li><a href="#">BI Health Systems</a></li> </ul> </div>';

	$("nav.header").prepend(dyn_menu);
	$(".sub_menu").append(submenu);

	$(".m_menu").click(function(){
		$(".sub_menu").toggleClass("active");
	});


	
});