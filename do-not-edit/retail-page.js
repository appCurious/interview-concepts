// snabby is our library to manipulate and control our content via shadowDom
import html from 'https://cdn.skypack.dev/snabby';

const page = retailPage();
const model = page.init();
let lastNode;

const update = () => {
    console.log('update ', model)
    html.update( lastNode, page.view(model, update) );
}


const retailSite = document.querySelector('#retail-site');
lastNode = html.update(retailSite, page.view(model, update));

// update();

const resizer = new ResizeObserver((entries) => {
    console.log('resize body', document.body.offsetWidth)
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

            const insert = (node) => {
                model.elem = node;
            };

            const selectThumb = (ev, model, update) => {
                ev.preventDefault();
                document.querySelectorAll('.thumb').forEach((t) => {
                    t.classList.remove('selected-active');
                });
                ev.target.parentNode.classList.add('selected-active');
                model.selectedImg = ev.target.src;
                
                update();
            };
        
            const isNarrow = model.displayWidth < 500; 
       
            return html`<div id="main"
                
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
        
                        <div id="thumb-container">
                            <div class="thumb selected-active" @on:click="${(event) => selectThumb(event, model, update)}"><img src="assets/parrot.jpg" height="100%"/></div>
                            <div class="thumb" @on:click="${(event) => selectThumb(event, model, update)}"><img src="assets/parrot.jpg" height="100%"/></div>
                            <div class="thumb" @on:click="${(event) => selectThumb(event, model, update)}"><img src="assets/parrot.jpg" height="100%"/></div>
                            <div class="thumb" @on:click="${(event) => selectThumb(event, model, update)}"><img src="assets/parrot.jpg" height="100%"/></div>
                        </div>
                        <div id="main-image">
                            <img style="max-height: 100%; max-width: 100%;"
                                @attrs:src="${model.selectedImg || 'assets/parrot.jpg'}" />
                        </div>
                    </div>
                    <div id="mobile-image" 
                        @style:display="${isNarrow ? '' : 'none'}">
                    
                    </div>
                </div>
                <div id="inline-content"
                    @style:width="${model.displayWidth}px">

                    Main Content 
                </div>
            </div>`;
        }
    };
}; 
