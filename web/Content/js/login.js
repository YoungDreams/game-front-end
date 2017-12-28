(function(){
	
	/* 立即登录 */
	$("#continue-btn").on("click", function(){
		
		var login_username = $("#login_username").val();
		var login_password = $("#login_password").val();
		// var Vcode = $("#login_yzm").val();
		
		if(login_username == ''){
			alert('请输入用户名');
			return false;
		}
		if(login_password == ''){
			alert('请输入密码');
			return false;
		}
		// if(Vcode == ''){
		// 	alert('请输入验证码');
		// 	return false;
		// }
		
		$.ajax({
			type: "post",
			url: 'http://demo.90909999.vip/PacketUserCenter.ashx',
			dataType: "json",
			async:false,
			data : {
				Method:"Login",
				Account:login_username,
				Password:login_password,
				Vcode:"Vcode"
			},
			success: function (data) {
				if(data.Code != 0){
					alert(data.Message);
					return false;
				}
				// window.location.href = './member.html';
				$("#Nickname").html(data.Data.Account);	// 用户名
				$("#number_Amount").html(data.Data.Amount);	// 账户金额
				
				$("#popup-style-1").hide();
				$("#login_last").show();
				$(".popup-style-1").slideUp("fast",function() {
					$(".layer-style-1").removeClass("img-bg-finish"),$("#registerPage").css("left",0)
				});
				setTimeout(function clear(){
					$("#login_last").hide();
				}, 3000);
			}
		});
	});


	

	/* 用户名 */
	$('#tb_userid').bind('input propertychange', function() {
		var tb_userid = $("#tb_userid").val();
		if(!reg.userReg.test(tb_userid) || tb_userid == ''){
			document.getElementById("li_userid1").className = 'icon_er1';
			document.getElementById("li_userid2").className = 'icon_er1';
			document.getElementById("li_userid3").className = 'icon_er1';
			return false;
		}
		
		document.getElementById("li_userid1").className = 'icon_er2';
		document.getElementById("li_userid2").className = 'icon_er2';
		
		/* 验证用户名是否被注册 */
		
		$.ajax({
			type: "post",
			url: 'http://demo.90909999.vip/PacketUserCenter.ashx',
			dataType: "json",
			async:false,
			data : {
				Method:"CheckAccount",
				Account:"demo01"
			},
			success: function (data) {
				console.log(data);
				if(data.code != 0){
					document.getElementById("li_userid3").className = 'icon_er1';
					reg.isuserReg = false;
				}else{
					document.getElementById("li_userid3").className = 'icon_er2';
					reg.isuserReg = true;
				}
			}
		});
	});  
		

	/* 密码 */


	$('#tb_password').bind('input propertychange', function() {
		var tb_password = $("#tb_password").val();
		// console.log(tb_password)
		
		if(tb_password.length <6 || tb_password.length>20){
			document.getElementById("li_password1").className = 'icon_er1';
			return false;
		}else{
			document.getElementById("li_password1").className = 'icon_er2';
		}
		
		
		if(!reg.pwdReg.test(tb_password)){
			document.getElementById("li_password2").className = 'icon_er1';
			return false;
		}
		document.getElementById("li_password2").className = 'icon_er2';
		
		/* 验证用户名是否被注册 */
		
		reg.ispwdReg = true;
	});  

	$('#tb_passwordcof').bind('focus', function() {
		var tb_passwordcof = $("#tb_passwordcof").val();
		var tb_password = $("#tb_password").val();
		if(tb_password != tb_passwordcof || tb_password.length <6 || tb_password.length>20){

			document.getElementById("li_passwordcof1").className = 'icon_er1';
			reg.ispwdRegcof = false;
		}else{
			document.getElementById("li_passwordcof1").className = 'icon_er2';
			reg.ispwdRegcof = true;
		}
	});

	/* 重复密码 */

	$('#tb_passwordcof').bind('input propertychange', function() {
		var tb_passwordcof = $("#tb_passwordcof").val();
		var tb_password = $("#tb_password").val();
		if(tb_password != tb_passwordcof || tb_password.length <6 || tb_password.length>20){

			document.getElementById("li_passwordcof1").className = 'icon_er1';
			reg.ispwdRegcof = false;
		}else{
			document.getElementById("li_passwordcof1").className = 'icon_er2';
			reg.ispwdRegcof = true;
		}
	});  


	/* 手机号验证 */

	$('#tb_contact').bind('input propertychange', function() {
		var tb_contact = $("#tb_contact").val();
		
		if(!reg.phone.test(tb_contact)){
			document.getElementById("li_mobile").className = 'icon_er1';
			return false;
		}
		document.getElementById("li_mobile").className = 'icon_er2';
		
		/* 验证用户名是否被注册 */
		reg.isphone = true;
	});  


	
	/* 发送验证码 */
	$("#fasongyanzm").on("click",function(){
		var tb_contact = $("#tb_contact").val();
		if(!reg.isphone){
			$("#tb_contact").focus();
			return false;
		}
		
		/* 验证 手机号唯一性 */
		$.ajax({
			type: "post",
			url: 'http://demo.90909999.vip/PacketUserCenter.ashx',
			dataType: "json",
			async:false,
			data : {
				Method:"CheckPhone",
				Phone:tb_contact
			},
			success: function (data) {
				// console.log(data);
				if(data.Code != 0){
					alert(data.Message);
				}else{
					function invokeSettime(obj){
						var countdown=60;
						settime(obj);
						function settime(obj) {
							if (countdown == 0) {
								$(obj).attr("disabled",false);
								$(obj).text("获取验证码");
								countdown = 60;
								return;
							} else {
								$(obj).attr("disabled",true);
								$(obj).text("("+countdown+")s重新发送");
								countdown--;
							}
							setTimeout(function() {
										settime(obj) }
									,1000)
						}
					}

					new invokeSettime("#fasongyanzm");
					
					/* 发送手机验证码 */
					$.ajax({
						type: "post",
						url: 'http://demo.90909999.vip/PacketUserCenter.ashx',
						dataType: "json",
						async:false,
						data : {
							Method:"SSMSV",
							Phone:tb_contact
						},
						success: function (data) {
							console.log(data);
							if(data.Code != 0){
								alert(data.Message);
							}else{
								alert('验证码发送成功...');
							}
						}
					});
					
				}
			}
		});
	})







	/* 退出 */



	$("#btnLogout").on("click",function(){
		$(".register-step-2").css("float","left");
		$(".register-step-3").css("float","right");
		$("#popup-style-1").show();
		$("#login_last").hide();
	});

	/* 点击更新验证码 */
	
	
	document.getElementById("login_yzmimg").onclick = function(){
		this.src = 'http://www.90909999.vip/dynamic_page/SecurityCode.aspx?rand=' + Math.random();
	}
	
	
	
})();