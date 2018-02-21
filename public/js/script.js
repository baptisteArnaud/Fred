$(document).ready(function(){
    var chatbox = document.getElementById("chatbox");

    $("#submit").click(function(e){
    	e.preventDefault();
    	message = $('#message').val();
    	$('#message').val("");
    	jsonMessage = {}
    	jsonMessage.message = message;
    	console.log(JSON.stringify(jsonMessage));
    	newUserMessage = "<div class='user'><div class='message-container'><article class='message'><div class='message-body'>"+message+"</div></article></div></div>";
    	$(".chatbox").append(newUserMessage);
        chatbox.scrollTop = chatbox.scrollHeight;
        $.ajax({url: "/", 
        	type: "POST", 
        	data: jsonMessage,
        	success: function(data){ 
        		newWatsonMessage = "<div class='watson'><div class='message-container'><article class='message watson'><div class='message-body'>"+data.message+"</div></article></div></div>"
        		$(".chatbox").append(newWatsonMessage);
                chatbox.scrollTop = chatbox.scrollHeight;
        	}, 
        	error: function(){ console.log('fail')}
        });
    });
});