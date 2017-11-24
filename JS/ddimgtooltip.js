/* Image w/ description tooltip v2.0
* Created: April 23rd, 2010. This notice must stay intact for usage 
* Author: Dynamic Drive at http://www.dynamicdrive.com/
* Visit http://www.dynamicdrive.com/ for full source code
*/


var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		
		//Nhập đường dẫn cho images ở đây- Có bao nhiêu ảnh thì tạo bấy nhiêu phần tử
		
		tooltips[1] = ["../ImageAss/detail1.jpg", , { background: "black" }]
		tooltips[2] = ["../ImageAss/detail2.jpg", , { background: "black" }]
		tooltips[3] = ["../ImageAss/detail3.jpg", , { background: "black" }]
		tooltips[4] = ["../ImageAss/detail4.jpg", , { background: "black" }]
		tooltips[5] = ["../ImageAss/detail5.jpg", , { background: "black" }]
		tooltips[6] = ["../ImageAss/detail6.jpg", , { background: "black" }]
		tooltips[7] = ["../ImageAss/detail7.jpg", , { background: "black" }]
		tooltips[8] = ["../ImageAss/detail8.jpg", , { background: "black" }]
		tooltips[9] = ["../ImageAss/detail9.jpg", , { background: "black" }]
		tooltips[10] = ["../ImageAss/detail10.jpg", , { background: "black" }]
		tooltips[11] = ["../ImageAss/detail11.jpg", , { background: "black" }]
		tooltips[12] = ["../ImageAss/detail12.jpg", , { background: "black" }]
		tooltips[13] = ["../ImageAss/detail13.jpg", , { background: "black" }]
		tooltips[14] = ["../ImageAss/detail14.jpg", , { background: "black" }]
		tooltips[15] = ["../ImageAss/detail15.jpg", , { background: "black" }]
		tooltips[16] = ["../ImageAss/detail16.jpg", , { background: "black" }]
		tooltips[17] = ["../ImageAss/detail17.jpg", , { background: "black" }]
		tooltips[18] = ["../ImageAss/detail18.jpg", , { background: "black" }]
		tooltips[19] = ["../ImageAss/detail19.jpg", , { background: "black" }]
		tooltips[20] = ["../ImageAss/detail20.jpg", , { background: "black" }]
		tooltips[21] = ["../ImageAss/detail21.jpg", , { background: "black" }]
		tooltips[22] = ["../ImageAss/detail22.jpg", , { background: "black" }]
		tooltips[23] = ["../ImageAss/detail23.jpg", , { background: "black" }]
		tooltips[24] = ["../ImageAss/detail24.jpg", , { background: "black" }]
		tooltips[25] = ["../ImageAss/detail25.jpg", , { background: "black" }]
		tooltips[26] = ["../ImageAss/detail26.jpg", , { background: "black" }]
		tooltips[27] = ["../ImageAss/detail27.jpg", , { background: "black" }]
		tooltips[28] = ["../ImageAss/detail28.jpg", , { background: "black" }]
		tooltips[29] = ["../ImageAss/detail29.jpg", , { background: "black" }]
		tooltips[30] = ["../ImageAss/detail30.jpg", , { background: "black" }]
		tooltips[31] = ["../ImageAss/detail31.jpg", , { background: "black" }]
		tooltips[32] = ["../ImageAss/detail32.jpg", , { background: "black" }]
		tooltips[33] = ["../ImageAss/detail33.jpg", , { background: "black" }]
		tooltips[34] = ["../ImageAss/detail34.jpg", , { background: "black" }]
		tooltips[35] = ["../ImageAss/detail35.jpg", , { background: "black" }]
		tooltips[36] = ["../ImageAss/detail36.jpg", , { background: "black" }]
		return tooltips //do not remove/change this line
	}(),

	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

	//***** NO NEED TO EDIT BEYOND HERE

	tipprefix: 'imgtip', //tooltip ID prefixes

	createtip:function($, tipid, tipinfo){
		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet
			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'
				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')
				)
			.css(tipinfo[2] || {})
			.appendTo(document.body)
		}
		return null
	},

	positiontooltip:function($, $tooltip, e){
		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]
		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 
		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x
		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
		$tooltip.css({left:x, top:y})
	},
	
	showbox:function($, $tooltip, e){
		$tooltip.show()
		this.positiontooltip($, $tooltip, e)
	},

	hidebox:function($, $tooltip){
		$tooltip.hide()
	},


	init:function(targetselector){
		jQuery(document).ready(function($){
			var tiparray=ddimgtooltip.tiparray
			var $targets=$(targetselector)
			if ($targets.length==0)
				return
			var tipids=[]
			$targets.each(function(){
				var $target=$(this)
				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"
				var tipsuffix=parseInt(RegExp.$1) //get d as integer
				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it
				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])
				$target.mouseenter(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.showbox($, $tooltip, e)
				})
				$target.mouseleave(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.hidebox($, $tooltip)
				})
				$target.mousemove(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.positiontooltip($, $tooltip, e)
				})
				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)
					$tooltip.mouseenter(function(){
						ddimgtooltip.hidebox($, $(this))
					})
				}
			})

		}) //end dom ready
	}
}

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]")