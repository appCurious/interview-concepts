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
            const targetDiv = document.querySelector(targetSelector);
            
            switch (flag) {
                case 'default':
                    // add some interactive content
                    break;
                
                case 'alternate':
                    // add some different content
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
