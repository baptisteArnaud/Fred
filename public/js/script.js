$(document).ready(function(){
    $("#submit").click(function(e){
    	e.preventDefault();
    	message = $('#message').val();
    	$('#message').val("");
    	jsonMessage = {}
    	jsonMessage.message = message;
    	console.log(JSON.stringify(jsonMessage));
    	newUserMessage = "<div class='user'><div class='message-container'><article class='message'><div class='message-body'>"+message+"</div></article></div></div>";
    	$(".chatbox").append(newUserMessage);
        $.ajax({url: "/", 
        	type: "POST", 
        	data: jsonMessage,
        	success: function(data){ 
        		newWatsonMessage = "<div class='watson'><div class='message-container'><article class='message'><div class='message-body'>"+data.message+"</div></article></div></div>"
        		$(".chatbox").append(newWatsonMessage);
        	}, 
        	error: function(){ console.log('fail')}
        });
    });
});