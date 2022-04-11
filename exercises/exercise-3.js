import html from 'https://cdn.skypack.dev/snabby';

window.INTERVIEW.registerExercise({
    challengeName: 'Challenge3',
    register: () => {

       const initExercise3 = (config) => {
        const model = {
            // what do you need to maintain ui state

        };

        console.log('configs', config)
        return model;

       };
       const viewExercise3 = (model, update) => {
        // call update(); when you make changes to the DOM
        // call update(); on user interactions that would update the DOM
        // we will call viewExercise3(model, update) for you to render your content

        console.log('review ', model)

        return html`<div>Your Content Here</div>`;
       };

        const displayContent = {
            initExercise3,
            viewExercise3
        };

        return displayContent;
    }
});

