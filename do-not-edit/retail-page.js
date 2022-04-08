// snabby is our library to manipulate and control our content via shadowDom
import html from 'https://cdn.skypack.dev/snabby';

const page = retailPage();
const model = page.init();
let lastNode;

const update = () => {
    lastNode = html.update( lastNode, page.view(model, update) );
}


const retailSite = document.querySelector('#retail-site');
lastNode = html.update(retailSite, page.view(model, update));


const resizer = new ResizeObserver((entries) => {
    model.displayWidth = document.body.offsetWidth;
    update();
});

resizer.observe(document.body);

function retailPage () {
    return {
        init: () => {
            return {
                id: 'E9638A6F-BEB4-4573-8F32-59746A636C7F',
                selectedImg: '',
                displayWidth: 890
            };
        },
        view: (model, update) => {

            const renderThumbs = (model, update) => {

                const selectThumb = (ev, model, idx) => {

                    model.selectedImg = ev.target.src;
                    model.selectedThumb = idx;

                    update();
                };  
                
                const thumbSources = [
                    'assets/parrot.jpg',
                    'assets/parrot.jpg',
                    'assets/parrot.jpg',
                    'assets/parrot.jpg',
                ];

                model.selectedThumb = model.selectedThumb  || 0;

                return thumbSources.map((thumb, idx) => {
                    const isSelected = model.selectedThumb === idx;

                    return html`
                        <div class="thumb ${idx}"
                            @class:selected-active=${isSelected}
                            @on:click="${(event) => selectThumb(event, model, idx)}">

                            <img src="${thumb}" height="100%"/>
                        </div>
                    `;
                });
            };
        
            const isNarrow = model.displayWidth < 500; 
       
            return html`<div id="main"
                @key=retailer-${model.id}
                @style:width="${model.displayWidth}px">

                <link rel="stylesheet" href="./do-not-edit/main.css">
                <!-- this html structure cannot be changed by you-->
                <!-- make the assumption this structure is provided by a 3rd party -->
                
                <!-- make the assumption this is working properly -->
                <!-- make the assumption you do not have access to alter this code  -->
                <div id="content-target" 
                    @style:width="${model.displayWidth}px">
                    <div class="wide"
                        @style:display="${ !isNarrow ? '' : 'none' }">
        
                        <div id="thumb-container"> ${renderThumbs(model, update)} </div>

                        <div id="main-image">
                            <img style="max-height: 100%; max-width: 100%;"
                                @attrs:src="${model.selectedImg || 'assets/parrot.jpg'}" />
                        </div>
                        <div class="description" style="display:flex; align-items:center;">
                            <h3>${model.selectedThumb === 0 ? 'Parrots like to eat Seeds' : 'Parrots like to eat Apples'}</h3>
                        </div>
                    </div>
                    <div id="mobile-image" 
                        @style:display="${isNarrow ? '' : 'none'}">
                       
                        <img style="max-height: 100%; max-width: 100%;"
                            @attrs:src="${model.selectedImg || 'assets/parrot.jpg'}" />
                    
                    </div>
                </div>
                <div id="inline-content"
                    @style:width="${model.displayWidth}px">

                    Main Content 
                    <div 
                        @style:display="${isNarrow ? '' : 'none'}">
                        <button
                            @on:click=${() => {
                                window.INTERVIEW.registerExercise({challengeName: 'Challenge2', register: () => {}});
                                window.INTERVIEW.checkExercise('Challenge2');
                            }}>Check Challenge 2</button>
                    </div>
                </div>
            </div>`;
        }
    };
}; 
