const flatPickrDate = () =>{
	$(".datepicker").flatpickr({
		dateFormat: "d/m/Y",
		disableMobile: "true",
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
		var maLoaiYeuCau = $(this).attr("data-maloaiyeucau");
		$("#drl-loaiyeucau").val(maLoaiYeuCau).trigger("change");
		$(".btn-close-popup").trigger("click");
	})
}

const popup = () => {
	$(".btn-close-popup").click(function(){
		$(this).parents(".popup").first().hide();
	})
}

$(document).ready(function () {
	flatPickrDate();
	select2();
	popup();
});
