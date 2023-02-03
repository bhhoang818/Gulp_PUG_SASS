const flatPickrDate = () =>{
	$(".datepicker").flatpickr({
		dateFormat: "d/m/Y",
		disableMobile: "true",
		inline: true
		// altInput: true,
		// dateFormat: "YYYY-MM-DD",
		// altFormat: "DD-MM-YYYY",
		// allowInput: true
		// parseDate: (datestr, format) => {
		// 	return moment(datestr, format, true).toDate();
		// },
		// formatDate: (date, format, locale) => {
		// 	// locale can also be used
		// 	return moment(date).format(format);
		// }
	})

	$("img.img-flatpickr").click(function(){
		$(this).parents(".flatpickr").first().find(".datepicker").click();
	})
}

const select2 = () =>{
	$(".select2").select2()

	$("[id*='drl-loaiyeucau']").click(function(){
		$("#popup-loaiyeucau").show();
	})

	$(".list-loaiyeucau li").click(function(){
		// var maLoaiYeuCau = $(this).attr("data-maloaiyeucau");
		// $("#drl-loaiyeucau").val(maLoaiYeuCau).trigger("change");
		// $(".btn-close-popup").trigger("click");

		var tenLoaiYeuCau = $(this).children(".txt-name").html();
		$(".btn-close-popup").trigger("click");
		$(".txt-popup-title").html(tenLoaiYeuCau);
		$("#popup-thongtinbosung").show();
		setTimeout(function(){$("#popup-thongtinbosung").find(".popup-container").first().addClass("active");}, 1);
	})
}

const popup = () => {
	$(".btn-close-popup").click(function(){
		$(this).parents(".popup").first().hide();
		$(this).parents(".popup").first().find(".popup-container").first().removeClass("active");
	})
}

const selectTab = () => {
	$(".tab-item").click(function(){
		var tabList = $(this).parents(".tab-list");
		tabList.find(".tab-item").removeClass("active");
		$(this).addClass("active");
		var panel = $(this).attr("ref");
		$(".panel-content-box .panel-item").removeClass("active");
		$(panel).addClass("active");
	})

	$(".tran-detail-box .row-header").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).next().removeClass("active");
		}
		else{
			$(this).addClass("active");
			$(this).next().addClass("active");
		}
	})
}

const selectKhoanVay = () => {
	$(".page-yeucaudichvu.page2 .content-box .info-box").click(function(){
		$("#popup-loaiyeucau").show();
		setTimeout(addClassActive, 1);
		// $("#popup-loaiyeucau").find(".popup-container").first().addClass("active");
		// $("#popup-loaiyeucau").find(".popup-container").first().css("bottom","0");
	})

	$(".page-yeucaudichvu .panel-content-box .panel-item .info-box").click(function(){
		$("#popup-chitietyeucau").show();
		setTimeout(function(){$("#popup-chitietyeucau").find(".popup-container").first().addClass("active");}, 1);
	})

	function addClassActive() {
		$("#popup-loaiyeucau").find(".popup-container").first().addClass("active");
	}
}

const copyToClipboard = () => {
	$(".icon-copy").click(function(){
		var element = $(this).parents(".txt-content").first().children(".text-copy");
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(element.html()).select();
		document.execCommand("copy");
		$temp.remove();
	})
}

const otpFuntion = () => {
	$(".txt-otp-number").bind('keyup', function (e) {
		console.log("otp event: keyup");
        var text = this.value;//String.fromCharCode(e.keyCode);
        if (/\D/g.test(text)) {
            // Filter non-digits from input value.
            text = text.replace(/\D/g, '');
        }
		console.log("text.length:" + text.length);
        if (text.length >= 6) {
			console.log("text:" + text);
            $("#txtOPT1").val(text.charAt(0));
            $("#txtOPT2").val(text.charAt(1));
            $("#txtOPT3").val(text.charAt(2));
            $("#txtOPT4").val(text.charAt(3));
            $("#txtOPT5").val(text.charAt(4));
            $("#txtOPT6").val(text.charAt(5));
        }
        else {
			console.log("111");
            this.value = text.charAt(text.length - 1);
            if ($(this).val() && $(this).val().length > 0) {
                this.value = this.value[this.value.length - 1];
                $(this).next().focus();
            }
        }
    });

	// $('.txt-otp-number').bind('paste', function (e) {
	// 	console.log("paste");
    //     var text = e.originalEvent.clipboardData.getData('text');//this.value;//String.fromCharCode(e.keyCode);
    //     if (/\D/g.test(text)) {
    //         // Filter non-digits from input value.
    //         text = text.replace(/\D/g, '');
    //     }
	// 	console.log("text.length:" + text.length);
    //     if (text.length >= 6) {
	// 		console.log("text:" + text);
	// 		console.log("text:" + text.charAt(0));
	// 		console.log("text:" + text.charAt(1));
	// 		console.log("text:" + text.charAt(2));
	// 		console.log("text:" + text.charAt(3));
	// 		console.log("text:" + text.charAt(4));
	// 		console.log("text:" + text.charAt(5));
    //         $("#txtOPT1").val(text.charAt(0));
    //         $("#txtOPT2").val(text.charAt(1));
    //         $("#txtOPT3").val(text.charAt(2));
    //         $("#txtOPT4").val(text.charAt(3));
    //         $("#txtOPT5").val(text.charAt(4));
    //         $("#txtOPT6").val(text.charAt(5));
    //     }
    // });

    $('.txt-otp-number').bind('blur input', function (e) {
		console.log("blur input");
        var text = this.value;//this.value;//String.fromCharCode(e.keyCode);
        if (/\D/g.test(text)) {
            // Filter non-digits from input value.
            text = text.replace(/\D/g, '');
        }
		console.log("text.length:" + text.length);
        if (text.length >= 6) {
			console.log("text:" + text);
			console.log("text:" + text.charAt(0));
			console.log("text:" + text.charAt(1));
			console.log("text:" + text.charAt(2));
			console.log("text:" + text.charAt(3));
			console.log("text:" + text.charAt(4));
			console.log("text:" + text.charAt(5));
            $("#txtOPT1").val(text.charAt(0));
            $("#txtOPT2").val(text.charAt(1));
            $("#txtOPT3").val(text.charAt(2));
            $("#txtOPT4").val(text.charAt(3));
            $("#txtOPT5").val(text.charAt(4));
            $("#txtOPT6").val(text.charAt(5));
        }
        // if (!isCheckOTP) {
        //     var isFullOTP = true;
        //     $(".input-otp").each(function () {
        //         if (!this.value) {
        //             isFullOTP = false;
        //         }
        //     });
        //     if (isFullOTP == true) {
        //         isCheckOTP_byBlur = true;
        //         console.log("blur input");
        //         if ($("#txtSoDienThoai").val())
        //             $("#btn-confirm").trigger("click");
        //     }
        // }
    });

	const clearOTP = () => {
		$(".txt-otp-number").each(function () {
			this.value = "";
		});
		$("#txtOPT1").focus();
	}
}

const redirectPreviousPage = () => {
	$(".btn-back").click(function(e){
		e.preventDefault();
		console.log(".btn-back clicked");
		if(history.length == 0){

		}
		else {
			history.go(-1);
		}
	})
}

$(document).ready(function () {
	flatPickrDate();
	select2();
	popup();
	selectTab();
	selectKhoanVay();
	copyToClipboard();
	otpFuntion();
	redirectPreviousPage();
});
