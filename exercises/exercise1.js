window.INTERVIEW.registerExercise({
    challengeName: 'Challenge1',
    register: () => {
        
        // INTERVIEW Injection Exercise
        // this is an example of the work you might do on a periodic bases
        //     - creating modules similar to this
        //     - fixing modules similar to this
        

        // Our work involves displaying content on 3rd party site pages
        //     DOM structure expected to receive our content can be found from the navigation links on the index.html
        //         - this html structure cannot be changed by you
        //         - make the assumption this structure is provided by a 3rd party

     
        // work with the code below to display content inside the target element (main-image)
        // the html structure provided cannot be changed

        // success will be measured in levels
        //     - does default content display at all
        //     - were you able to display either default or alternate content based on conditions
        //     - were you able to make changes for defensive coding to protect against operating on a null reference
        
        
        // make adjustments to the code as you see necessary
        // make the assumption the names of these functions cannot change
        // make the assumption the return types of these functions cannot change

        const targetSelector = '.content-target #main-image';
                
        const displayContent = {
            shouldShow: () => {
                // we often determine content to display based on wide view and narrow views
                // this can be mobile versions of the site but not always
                if (document.querySelector('#content-target #mobile-image').offsetWidth > 0 )
                    return 'default';

                // to score higher on this exercise
                // return 'alternate' if the first thumb is selected from the thumb strip
                

                // we will return a default value 'default'
                return 'default';
            },
            isReady: () => {
                // this is a check to confirm the target element is present
                return !!document.querySelector(targetSelector);

            },
            getDisplayElement: () => {
                return document.querySelector(targetSelector);
            },

            init: () => {
                if (displayContent.isReady()) {
                    const targetElement = displayContent.getDisplayElement();

                    const defaultContent = document.createElement('div');
                    const dfltSuccess = document.createElement('div');
                    dfltSuccess.innerHTML = 'Default Content - Displays';
                    defaultContent.appendChild(dfltSuccess);

                    defaultContent.id = 'default-content';
                    defaultContent.setAttribute('style',`
                        display: none;
                        position: relative;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                        background-color: black;
                        color: white;
                        text-align: center;

                    `);

                    const alternateContent = document.createElement('div');
                    const altSuccess = document.createElement('div');
                    altSuccess.innerHTML = 'Alternate Content - Displays';
                    alternateContent.appendChild(altSuccess);

                    alternateContent.id = 'alternate-content';
                    alternateContent.setAttribute('style',`
                        display: none;
                        position: relative;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                        background-color: #6946d1;
                        color: white;
                        text-align: center;

                    `);

                    defaultContent.style.display = '';

                    targetElement.insertAdjacentElement('beforeend', defaultContent);
                    targetElement.insertAdjacentElement('beforeend', alternateContent);
                }
            },
            show: (contentType) => {
                const targetElement = displayContent.getDisplayElement();
                if (contentType === 'default') {
                    targetElement.querySelector('#default-content').style.display = '';
                    targetElement.querySelector('#alternate-content').style.display = 'none';
                } else {
                    targetElement.querySelector('#default-content').style.display = 'none';
                    targetElement.querySelector('#alternate-content').style.display = '';
                }
                    
            }
        };

        return displayContent;
    }
});

