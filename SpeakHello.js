(function(window) {
  var helloSpeaker = {}; // Creating an empty object

  helloSpeaker.speak = function(name) {
    console.log("Hello " + name);
  };

  // Expose helloSpeaker object to the global context with the name 'helloSpeaker'
  window.helloSpeaker = helloSpeaker;
})(window);


// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";


// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
