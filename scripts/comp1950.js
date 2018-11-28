

$( document ).ready(function() {
    $(".btn-menu").click(function(){
		$(".header-content-wrap nav").toggle('show');
	});
	
	$("#submitcontact").click(function(e){
		if($("#contactform")[0].checkValidity()){
			e.preventDefault();
			$("#contactform article:nth-child(1)").css("display","block");
			$("#contactform article:nth-child(2)").css("display","none");
			$("#contactform article:nth-child(3)").css("display","none");
			$("[name='firstname']").val("");
			$("[name='lastname']").val("");
			$("[name='email']").val("");
			$("[name='studnumber']").val("");
			$("[name='question']").val("");
			$("[name='studtype']").prop('checked', false);
		}
	});

	$("#resetcontactform").click(function(e){
		e.preventDefault();
		$("#contactform article:nth-child(1)").css("display","none");
		$("#contactform article:nth-child(2)").css("display","block");
		$("#contactform article:nth-child(3)").css("display","block");
		$("[name='firstname']").val("");
		$("[name='lastname']").val("");
		$("[name='email']").val("");
		$("[name='studnumber']").val("");
		$("[name='question']").val("");
		$("[name='studtype']").prop('checked', false);
	});

	$(".day .cardouter i").click(function(e){
		let el = $(e.target).parent().parent().parent();
		if ($(el).hasClass("day1")){
			$("#docframe iframe").attr("src","./public/day1.docx");
		}else if($(el).hasClass("day2")){
			$("#docframe iframe").attr("src","./public/day2.docx");
		}else if($(el).hasClass("day3")){
			$("#docframe iframe").attr("src","./public/day3.docx");
		}
	});
});