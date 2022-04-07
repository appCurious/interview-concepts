import html from 'https://cdn.skypack.dev/snabby';

// Thanks for looking at this.  Look but do NOT touch ;)
// this is the logic that provides you feedback as you work through the exercises

( function () {
    
    const challenge1 = (flag) => {

        if (window.INTERVIEW.isReady()) {
            window.INTERVIEW.init();

            const resizer = new ResizeObserver((entries) => {
                window.INTERVIEW.size();
            });
            resizer.observe(window.INTERVIEW.getDisplayElement());

            const m = new MutationObserver((records) => {
                window.INTERVIEW.size();
            });
            m.observe(window.INTERVIEW.getDisplayElement(), {attributes: true})

           

            const flag = window.INTERVIEW.shouldShow();
            console.log(`should show ${flag}`);
            
            // '#default-content'
            // '#alternate-content'
            const targetSelector = `#${flag}-content`;
            let content;
            switch (flag) {
                case 'default':
                    // add some interactive content
                    try {
                        if (!document.querySelector('#default-overlay-img')) {
                           
                            content = document.querySelector(targetSelector);
                            content.append(document.createElement('div'));
                            html.update(document.querySelector(targetSelector + '>div'), html`<div>
                                <img src="assets/apple.jfif" style="top: 20px; left: 20px; position: absolute; width:50px; height: 50px;" />
                            </div>`);

                            console.log('Exercise 1 - able to inject content - how does it look?');
                        }
                       
                    } catch (e) {
                        console.warn(' !!! Exercise 1 caught and exception ', e);
                    }
                    break;
                
                case 'alternate':
                    // add some different content
                    try {
                        if (!document.querySelector('#default-overlay-img')) {
                           
                            content = document.querySelector(targetSelector);
                            content.append(document.createElement('div'));
                            html.update(document.querySelector(targetSelector + '>div'), html`<div>
                                <img src="assets/seeds.jfif" style="top: 20px; left: 20px; position: absolute; width:50px; height: 50px;" />
                            </div>`);

                            console.log('Exercise 1 - able to inject content - how does it look?');
                        }
                       
                    } catch (e) {
                        console.warn(' !!! Exercise 1 caught and exception ', e);
                    }
                    break;

                default:
                    console.warn('exercise 1 shouldShow ( ) return string has changed - do NOT change that');
                    break;
            }

            window.INTERVIEW.show(window.INTERVIEW.shouldShow());

        } else {
            console.warn(' !!! Exercise 1 code needs updating - Not Ready !!! ');
        }
        
    };

    const challenge2 = () => {
        const narrowElem = document.querySelector('#mobile-image');
        if (!narrowElem) {
            console.warn('exercise 2 - the narrow mobile-image is not present (you might be on a wide screen)')
        } else {
            // we are expecting alternate content here
            const altContent = narrowElem.querySelector('#alternate-content');
            if (!altContent)
                return console.warn(' !!! Exercise 2 needs some work yet, not seeing the expected content');

            console.log('Excercise 2 - looks like you might have it', narrowElem);
        }
    };

    const checkChallengeMap = {
        Challenge1: challenge1,
        Challenge2: challenge2,
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
