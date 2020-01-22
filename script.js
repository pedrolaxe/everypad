$(document).ready(function(){

	var url = 'http://www.dontpad.com/';
	var urlcode = Math.random().toString(5).substring(2, 7) + Math.random().toString(5).substring(2, 7);
	var urlmontada = url+urlcode;
	
	//$('#salvar').click(function(){
	$('#codepad').on('change keyup', function(){
	
		var dpad = $('#codepad').val();
		
		if(dpad.length > 0 ){
			$.ajax({ 
				url: urlmontada,
				data: {"text": dpad},
				type: 'post',
				beforeSend: function() {
					$('#response').html('<img src="loader.gif">');
				  },
				success: function(result){
				$('#saveto').text(urlmontada).show(500);
				$('#response').html('');
				console.log(urlmontada);
				}
			});
		}//if

		
	
	
	});

});
