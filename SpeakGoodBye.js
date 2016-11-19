(function(window){
    var byeSpeaker = {};
    var speakWord = "Good Bye";

    byeSpeaker.speak =  function(name, id) {
    	var message = speakWord + " " + name;
        document.getElementById(id).innerHTML = message;
        console.log(message);
    };
 
    window.byeSpeaker = byeSpeaker;
})(window);