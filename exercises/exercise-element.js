// snabby, the virtual dom rendering library https://github.com/mreinstein/snabby
import html from 'https://cdn.skypack.dev/snabby';
import ex3  from './exercise-3.js';

// Custom Element
// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements

class InterviewChallenge extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    
        
        // add onto exercises/exercise-3.js to render feedback in the DOM

        // SUCCESS will be measured in levels
        //    - content renders from exercise 3
        //    - feedback can be added to this element

        //    - when feedback can be added to this element we would like it to be displayed in the DOM
        //    - what the feedback looks like in the DOM is up to you
        //        how should the user interact with the feedback
        //        how should it be displayed


        // write element functionality in here

        // we'll start you off with an example update function that is passed to your exercise
        // you now need to make the configs for it and initialize
        // alter this function as needed

        // this.update = () => {
        //     this.previousNode = html.update(this.previousNode, ex3.view(this.model, this.update));
        // }

        // alter this as needed
        // this.previousNode = ex3.view(this.model, this.update);
  
    }

}

if (!customElements.get('interview-challenge'))
    customElements.define('interview-challenge', InterviewChallenge);
