import html from 'https://cdn.skypack.dev/snabby';

// In this exercise you will render main content on the retail page
// this is the worker file that will return snabby html
// this is your widget - you decide how the content will display

/**
    SUCCESS will be measured in levels
        - is the user able to interact with the content ( click, swipe )
        - is the user able to navigate to all the content
        - considerations for a11y ( keyboard / device navigation, other considerations)
        - css creativity ( transitions, visual effects )

 */

function init (configs) {
    console.log(configs);

    // we will call init(); for you and provide configurations

    const model = {
        // what do you need to maintain ui state of this component
    };
    return model;
}

function view (model, update) {

    console.log(model)

    // call update(); when you make changes to the DOM
    // call update(); on user interactions that would update the DOM
    // we will call view(model, update) for you to render your content

    return html`<div>Your Content Here</div>`;
}

export default { init, view }

