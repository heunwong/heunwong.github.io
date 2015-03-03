$(function() {
	$('#alertMe').click(function(e) {
		e.preventDefault();

		$('#successAlert').slideDown();
	});

	$('#sucessAlert').on('closed.bs.alert', function () {
  		$().alert('close')
  	});
})
});