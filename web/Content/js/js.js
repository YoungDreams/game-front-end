(function(){
	
	/* 点击登录 */
	
	$("#openLogin").on("touchstart",function(){
		$("#loginPanel").addClass("active");
	});
	
	$(".panel_mask").on("touchstart",function(e){
		$("#loginPanel").removeClass("active");
		e.preventDefault()
	});
	
	$(".check_btn").on("touchstart",function(){
		if($(this).hasClass("show")){
			$(this).removeClass("show");
			var val = $(".passwordtxt").val();
			$(".passwordtxt").hide();
			$(".password1231").val(val).show();
		}else{
			$(this).addClass("show");
			var val = $(".password1231").val();
			$(".passwordtxt").val(val).show();
			$(".password1231").hide();
		}
	})
	
})();



(function(){
	
	/* 个人资料 -手机 */
	
	$("#opaniPhone").on("touchstart",function(){
		$("#emailCode").addClass("active");
	});
	
	$(".cancel_mask").on("touchstart",function(e){
		$("#iPhone").removeClass("active");
		e.preventDefault()
	});
	
})();

(function(){
	
	/* 个人资料 -邮箱 */
	
	$("#opanemailCode").on("touchstart",function(){
		$("#emailCode").addClass("active");
	});
	
	$(".cancel_mask").on("touchstart",function(e){
		$("#emailCode").removeClass("active");
		e.preventDefault()
	});
	
})();



(function(){
	
	/* 个人资料 -实名认证 */
	
	$("#opanvalidate").on("touchstart",function(){
		$("#validate").addClass("active");
	});
	
	$(".cancel_mask").on("touchstart",function(e){
		$("#validate").removeClass("active");
		e.preventDefault()
	});
	
})();


(function(){
	
	/* 个人资料 -邮编 */
	
	$("#opanpostcode").on("touchstart",function(){
		$("#postcode").addClass("active");
	});
	
	$(".cancel_mask").on("touchstart",function(e){
		$("#postcode").removeClass("active");
		e.preventDefault()
	});
	
})();


(function(){
	
	/* 个人资料 -地址 */
	
	$("#openaddress").on("touchstart",function(){
		$("#address").addClass("active");
	});
	
	$(".cancel_mask").on("touchstart",function(e){
		$("#address").removeClass("active");
		e.preventDefault()
	});
	
})();


(function(){
	
	/* 安全中心 -修改密码 */
	
	$("#opanedit").on("touchstart",function(){
		$("#edit").addClass("active");
	});
	
	$(".cancel_mask").on("touchstart",function(e){
		$("#edit").removeClass("active");
		e.preventDefault()
	});
	
})();

(function(){
	
	/* 安全中心 -提款密码 */
	
	$("#opantikuan").on("touchstart",function(){
		$("#tikuan").addClass("active");
	});
	
	$(".cancel_mask").on("touchstart",function(e){
		$("#tikuan").removeClass("active");
		e.preventDefault()
	});
	
})();


(function(){
	
	/* 安全中心 -安全问题 */
	
	$("#opansrcurity").on("touchstart",function(){
		$("#srcurity").addClass("active");
	});
	
	$(".cancel_mask").on("touchstart",function(e){
		$("#srcurity").removeClass("active");
		e.preventDefault()
	});
	
})();




(function(){
	
	/* 钱包 -存款 */
	
	$("#opanpayment").on("touchstart",function(){
		$("#form_panel").addClass("active");
		$("#payment").addClass("block");
	});
	
	$(".close").on("touchstart",function(e){
		$("#form_panel").removeClass("active");
		$("#payment").removeClass("block");
		e.preventDefault()
	});
	
})();
(function(){
	
	/* 钱包 -存款 */ 
	
	$("#opanbank").on("touchstart",function(){
		$("#form_panel").addClass("active");
		$("#bank").addClass("block");
	});
	
	$(".close").on("touchstart",function(e){
		$("#form_panel").removeClass("active");
		$("#bank").removeClass("block");
		e.preventDefault()
	});
	
})();

(function(){

	/* 钱包 -存款 */
	
	$("#opanqq").on("touchstart",function(){
		$("#form_panel").addClass("active");
		$("#qq").addClass("block");
	});
	
	$(".close").on("touchstart",function(e){
		$("#form_panel").removeClass("active");
		$("#qq").removeClass("block");
		e.preventDefault()
	});
	
})();




(function(){
	
		/* 钱包 -存款 */
		
		$("#opanbox").on("touchstart",function(){
			$("#form_panel").addClass("active");
			$("#box").addClass("block");
		});
		
		$(".close").on("touchstart",function(e){
			$("#form_panel").removeClass("active");
			$("#box").removeClass("block");
			e.preventDefault()
		});
		
	})();


	(function(){
		
			/* 钱包 -存款 */
			
			$("#opanWeChat").on("touchstart",function(){
				$("#form_panel").addClass("active");
				$("#WeChat").addClass("block");
			});
			
			$(".close").on("touchstart",function(e){
				$("#WeChat").removeClass("active");
				$("#WeChat").removeClass("block");
				e.preventDefault()
			});
			
		})();





















