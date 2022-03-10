$(document).ready(function(){

	var url = 'http://www.dontpad.com/';
	var random = Math.random().toString(36).substring(8);;
	var urlcode = url+random;
	$("#options").hide();

	$("#optbt").click(function(){
		$("#options").toggle();
	  });

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
		

			$('#getdata').on('change keyup', function(){	
				setTimeout(function(){ 
				$.ajax({
					url: "https://cors-anywhere.herokuapp.com/" + urlbase + $('#getdata').val(),
					method: "get",
					success: function(data) {
						
					console.log("data:", data)
					var texto = $(data).find("#text").html();
						$('#codepad').val(texto);
					}
				});
				$('#link').val($('#getdata').val());
				$('#saveto').text(urlbase + $('#getdata').val()).show(500);
			}, 1000);
				
			});
	}
	GetSavedDontPad();
});
