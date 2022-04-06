// snabby is our library to manipulate and control our content via shadowDom
import html from 'https://cdn.skypack.dev/snabby';


const model = {
    selectedImg: 'assets/parrot.jpg'
};

const retailSite = document.querySelector('#retail-site');
const update = () => {
    html.update( retailSite, getRetailPage(model, update) );
}

update();

function getRetailPage (model, update) {

    const selectThumb = (ev, model, update) => {
        ev.preventDefault();
        document.querySelectorAll('.thumb').forEach((t) => {
            t.classList.remove('selected-active');
        });
        ev.target.parentNode.classList.add('selected-active');
        model.selectedImg = ev.target.src;
        console.log('ev ', ev.target.src, model.selectedImg)
        update();
    };

    return html`<div id="main">
        <link rel="stylesheet" href="./do-not-edit/main.css">
        <!-- this html structure cannot be changed by you-->
        <!-- make the assumption this structure is provided by a 3rd party -->
        
        <!-- make the assumption this is working properly -->
        <!-- make the assumption you do not have access to alter this code  -->
        <div id="content-target">
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
            <div id="mobile-image"></div>
        </div>
        <div id="inline-content">
            Main Content 
        </div>
    </div>`;

}