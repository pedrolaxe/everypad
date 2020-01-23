$(document).ready(function(){

	var url = 'http://www.dontpad.com/';
	var ramdom = Math.random().toString(5).substring(2, 7) + Math.random().toString(5).substring(2, 7);
	var urlcode = url+ramdom;

	$('#codepad').on('change keyup', function(){
		var linkval = $('#link').val().trim();
		var urllink = url+linkval;
	
		var dpad = $('#codepad').val();
		
		if(dpad.length > 0 ){
			if($('#link').val().length === 0){

			$.ajax({ 
				url: urlcode,
				data: {"text": dpad},
				type: 'post',
				beforeSend: function() {
					$('#response').html('<img src="loader.gif">');
				  },
				success: function(result){
				$('#saveto').text(urlcode).show(500);
				$('#response').html('');
				console.log(urlcode);
				}
			});

		}else{
		
			$.ajax({
				url: urllink,
				data: {"text": dpad},
				type: 'post',
				beforeSend: function() {
					$('#response').html('<img src="loader.gif">');
				  },
				success: function(result){
				$('#saveto').text(urllink).show(500);
				$('#response').html('');
				console.log(urllink);
				}
			});
		}//else
		}//if

	
	});
});
