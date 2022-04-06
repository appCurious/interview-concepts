import html from 'https://cdn.skypack.dev/snabby';

(function () {
    
    const challenge1 = (flag) => {
        // '#default-content'
        // '#alternate-content'
        const targetSelector = `'#'${flag}`;
        const targetDiv = document.querySelector(targetSelector);
        
        switch (flag) {
            case 'default-content':
                break;
            
            case 'alternate-content':
                
                break;

            default:
                console.warn('challenge 1 shouldShow ( ) return string has changed - do NOT change this');
                break;
        }
    };

    const checkChallengeMap = {
        Challenge1: () => {
            if (window.INTERVIEW.isReady()) {
                window.INTERVIEW.init();
                console.log(window.INTERVIEW.show(window.INTERVIEW.shouldShow()));
                challenge1(window.INTERVIEW.show(window.INTERVIEW.shouldShow()));
            } else {
                console.warn(' !!! Challenge1 code needs updating - Not Ready !!! ');
            }
        }
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
