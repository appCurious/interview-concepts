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

        // SUCCESS will be measured in levels
        //     - does default content display at all
        //     - were you able to display either default or alternate content based on conditions
        //     - were you able to make changes for defensive coding to protect against operating on a null reference ( if the DOM were to change without warning )
        //     - were you able to make other changes for best practices DRY
        
        
        // make adjustments to the code as you see necessary
        // make the assumption the names of these functions cannot change
        // make the assumption the return types of these functions cannot change

        const targetSelector = '.content-target #main-image';
                
        const displayContent = {
            shouldShow: () => {
                // we often determine content to display based on wide view and narrow views
                // this can be mobile versions of the site but not always
                if (document.querySelector('#content-target #mobile-image').offsetWidth > 0 )
                    return 'alternate';

                // to score higher on this exercise
                // return 'alternate' // if the first thumb is selected from the thumb strip
                

                // we will return a default value 'default'
                return 'default';
            },
            isReady: () => {
                // this is a check to confirm the target element is present
                const targetElement = document.querySelector(targetSelector);
                return !!document.querySelector(targetSelector) //&& !!resizeElem;

            },
            getDisplayElement: () => {
                const targetElement = document.querySelector(targetSelector);
                return targetElement;
            },

            init: () => {
                if (displayContent.isReady()) {
                    const targetElement = document.querySelector(targetSelector);

                    const defaultContent = document.createElement('div');
                    const dfltSuccess = document.createElement('div');
                    dfltSuccess.innerHTML = 'Default Content - Displays';
                    defaultContent.appendChild(dfltSuccess);

                    defaultContent.id = 'default-content';
                    defaultContent.setAttribute('style',`
                        display: none;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 100%;
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
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 100%;
                        height: 100%;
                        color: white;
                        text-align: center;

                    `);

                    targetElement.insertAdjacentElement('afterbegin', defaultContent);
                    targetElement.insertAdjacentElement('afterbegin', alternateContent);
                }
            },
            show: (contentType) => {
                const targetElement = document.querySelector(targetSelector);
                if (contentType === 'default') {
                    targetElement.querySelector('#default-content').style.display = '';
                    targetElement.querySelector('#alternate-content').style.display = 'none';
                } else {
                    targetElement.querySelector('#default-content').style.display = 'none';
                    targetElement.querySelector('#alternate-content').style.display = '';
                }
                    
            },
            size: () => {
                const sizeElement = displayContent.getDisplayElement();
                const contentElement = displayContent.shouldShow() === 'default' ?  document.querySelector('#default-content') : document.querySelector('#alternate-content');

                contentElement.style.top = `${sizeElement.offsetTop}px`;
                contentElement.style.left = `${sizeElement.offsetLeft}px`;
                contentElement.style.height = `${sizeElement.offsetHeight}px`;
                contentElement.style.width = `${sizeElement.offsetWidth}px`;
            }
        };

        return displayContent;
    }
});

