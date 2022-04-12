import html from 'https://cdn.skypack.dev/snabby';

function init (configs) {
    console.log(configs);
    
    const model = {
        // what do you need to maintain ui state of this component
    };
    return model;
}

function view (model, update) {

    console.log(model)

    // call update(); when you make changes to the DOM
    // call update(); on user interactions that would update the DOM
    // we will call viewExercise3(model, update) for you to render your content

    return html`<div>Your Content Here</div>`;
}

export default { init, view }

