// Custom Element
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements

class InterviewChallenge extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      
      // add onto exercises/exercise-3.js to render feedback in the DOM

      //  when feedback can be added to this element we will display in the console

      // SUCCESS will be measured in levels
      //    - content renders from exercise 3
      //    - feedback can be added to this element

      //    - when feedback can be added to this element we would like it to be displayed in the DOM
      //    - what the feedback looks like is up to you
      //        how should the user interact with the feedback
      //        how should it be displayed



      // write element functionality in here

      
  
    }

}

if (!customElements.get('interview-challenge'))
    customElements.define('interview-challenge', InterviewChallenge);
