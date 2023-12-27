(function() {
  var byeSpeaker = {};

  byeSpeaker.speakWord = "Good Bye";

  byeSpeaker.speak = function(name) {
    console.log(byeSpeaker.speakWord + " " + name);
  };

  // Expose 'byeSpeaker' to the global scope
  window.byeSpeaker = byeSpeaker;

})();
