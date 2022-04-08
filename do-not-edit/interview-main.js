import html from 'https://cdn.skypack.dev/snabby';

// Thanks for looking at this.  Look but do NOT touch ;)
// this is the logic that provides you feedback as you work through the exercises

( function () {
    
    const DEFAULT_CONTENT_ID = 'default-content';
    const ALTERNATIVE_CONTENT_ID = 'alternate-content';
    const MOBILE_IMAGE_ID = 'mobile-image';
    let content;
    let mainContent;

    // render a small amount of content for confirmation of fixing the injection module
    const renderSpot = ({src, text, content, challengeName }) => {
        console.log('text ', text)
        const click = () => {
            window.INTERVIEW.challenges[challengeName].show = !window.INTERVIEW.challenges[challengeName].show;

            html.update(content.querySelector('div'), renderSpot({src, text, content, challengeName}));
        };

        return html`<div class="spot"
            @on:click=${click} >

            <img src="${src}" style="top: 20px; left: 20px; position: absolute; width:50px; height: 50px;" />
            <div @style:display="${window.INTERVIEW.challenges[challengeName].show ? '' : 'none'}">
                ${text === 'default' ? 'apples are good source of yum': 'seeds are high in nutrients'}
            </div>
        </div>`
    };

    const challenge1 = (flag) => {

        if (window.INTERVIEW.isReady()) {
            // only do this once to ensure we are not duplicating our content
            if(!document.querySelector(`#${DEFAULT_CONTENT_ID}`)) {
                window.INTERVIEW.init();

                window.INTERVIEW.challenges['Challenge1'].resizer = new ResizeObserver((entries) => {
                    window.INTERVIEW.size();
                    renderDisplay();
                });
                window.INTERVIEW.challenges['Challenge1'].resizer.observe(window.INTERVIEW.getDisplayElement());

                window.INTERVIEW.challenges['Challenge1'].mutator = new MutationObserver((records) => {
                    window.INTERVIEW.size();
                    renderDisplay();
                });

                window.INTERVIEW.challenges['Challenge1'].mutator.observe(window.INTERVIEW.getDisplayElement(), {attributes: true});
                
            }

            function renderDisplay () {
                    const flag = window.INTERVIEW.shouldShow();
                    console.log(`should show ${flag}`);
                    
                    switch (flag) {
                        case 'default':
                            // add some interactive content
                            try {
                                if (!document.querySelector('#default-overlay-img')) {
                                
                                    content = document.querySelector(`#${DEFAULT_CONTENT_ID}`);
                                    html.update(content.querySelector('div'), renderSpot({src: 'assets/apple.jfif',text: flag, content, challengeName: 'Challenge1'}));

                                    console.log('Exercise 1 - able to inject content - how does it look?');
                                }
                            
                            } catch (e) {
                                console.warn(' !!! Exercise 1 caught an exception ', e);
                            }
                            break;
                        
                        case 'alternate':
                            // add some different content
                            try {
                                if (!document.querySelector('#default-overlay-img')) {
                                
                                    content = document.querySelector(`#${ALTERNATIVE_CONTENT_ID}`);
                                    html.update(content.querySelector('div'), renderSpot({src: 'assets/seeds.jfif',text: flag, content,  challengeName: 'Challenge1'}));
                                
                                    console.log('Exercise 1 - able to inject Alternate content - how does it look?');
                                }
                            
                            } catch (e) {
                                console.warn(' !!! Exercise 1 caught an exception ', e);
                            }
                            break;

                        default:
                            console.warn('exercise 1 shouldShow ( ) return string has changed - do NOT change that');
                            break;
                    }

                    window.INTERVIEW.show(window.INTERVIEW.shouldShow());

            }

        } else {
            console.warn(' !!! Exercise 1 code needs updating - Not Ready !!! ');
        }
        
    };

    const challenge2 = () => {
        const narrowElem = document.querySelector(`#${MOBILE_IMAGE_ID}`);
        if (!narrowElem) {
            console.warn('exercise 2 - the narrow mobile-image is not present - it is expected to be here')
        } else {
            // we are expecting alternate content here
            const altContent = document.querySelector(`#${ALTERNATIVE_CONTENT_ID}`);
            if (!altContent)
                return console.warn(' !!! Exercise 2 needs some work yet, not seeing the expected content');

            console.log('Excercise 2 - looks like you might have it - does the content appear over the narrow image?', narrowElem);
        }
    };

    const challenge3 = () => {
        // expecting the module to have init, view that registers and is added to window.INTERVIEW
        // i was taught to know my data, now my structure
        const instructs = `review the data in the configs and use them appropriately.  
Be sure to add the configs model
Use the display width
How might the content be presented in fullscreen
`;

        const configs = {
            exerciseInstructions: instructs,
            displayWidth: 780,
            isFullscreen: false,
            items: [
                // what oh what should we add here
            ]
        };

        // review the model for the original content - instruction 1
        const model = window.INTERVIEW.initExercise3(configs);

        // setup injection target
        const targetMain = document.querySelector('#main-content');
        const targetElem = targetMain.querySelector('div');
        targetElem.id = "injection-point";
        targetElem.append(document.createElement('div'));
        targetElem.setAttribute('style', `
            max-width: 1200px;
            margin: auto;
        `);

        const update = () => {
            model.displayWidth = Math.min(targetMain.offsetWidth, 1400);
            mainContent = html.update(mainContent, window.INTERVIEW.viewExercise3(model, update));
        };

        mainContent = html.update(targetElem.querySelector('div'), html`<div></div>`);

        window.INTERVIEW.challenges['Challenge3'].resizer = new ResizeObserver((entries) => {
           update();
        });
        window.INTERVIEW.challenges['Challenge3'].resizer.observe(targetMain);

        
    };

    const checkChallengeMap = {
        Challenge1: challenge1,
        Challenge2: challenge2,
        Challenge3: challenge3,
    };

    window.INTERVIEW = window.INTERVIEW || {
        challenges: {}
    };


    window.INTERVIEW.checkExercise = (challengeName) => {
        const e = window.INTERVIEW.challenges[challengeName];
        e?.checkChallenge();
    };

    window.INTERVIEW.registerExercise = (val) => {
        window.INTERVIEW = { ...window.INTERVIEW, ...val.register() };

        window.INTERVIEW.challenges[val.challengeName] = {
            checkChallenge: checkChallengeMap[val.challengeName]
        }
    };
}());
