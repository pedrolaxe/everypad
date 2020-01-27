$(document).ready(function(){

	var url = 'http://www.dontpad.com/';
	var random = Math.random().toString(36).substring(8);;
	var urlcode = url+random;


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


	function GetSavedDontPad(){
		var urlbase = 'http://www.dontpad.com/';
		var link = $('#getdata').val();
		console.log("LINK: "+ link);
			$('#getdata').on('change keyup', function(){	
				console.log("LINK: "+ $('#getdata').val());
				console.log('http://www.dontpad.com/' +	$('#getdata').val());
				
				$.ajax({'url':'http://www.dontpad.com/'+$('#getdata').val(), data: {}, success: function(xhr, status) {
					console.log(xhr.status); }
				});
				
			});
	}
	GetSavedDontPad();
});
