(function(window){
    var helloSpeaker = {};
 
    var speakWord = "Hello";
    helloSpeaker.speak =  function(name, id) {
    	var message = speakWord + " " + name;
        document.getElementById(id).innerHTML = message;
        console.log(message);
    };
 
    window.helloSpeaker = helloSpeaker;
})(window);