// snabby is our library to manipulate and control our content via shadowDom
import html from 'https://cdn.skypack.dev/snabby';

html.update( document.body, getMainImage() );

function getMainImage () {

    function selectThumb (ev) {
        ev.preventDefault();
        document.querySelectorAll('.thumb').forEach((t) => {
            t.classList.remove('selected-active');
        });
        ev.target.parentNode.classList.add('selected-active');
    }

    return html`<div id="main">
        <link rel="stylesheet" href="main.css">
        <!-- this html structure cannot be changed by you-->
        <!-- make the assumption this structure is provided by a 3rd party -->
        
        <!-- make the assumption this is working properly -->
        <!-- make the assumption you do not have access to alter this code  -->
        <div id="content-target">
            <div id="thumb-container">
                <div class="thumb selected-active" @on:click="${(event) => selectThumb(event)}"><img src="assets/parrot.jpg" height="100%"/></div>
                <div class="thumb" @on:click="${(event) => selectThumb(event)}"><img src="assets/parrot.jpg" height="100%"/></div>
                <div class="thumb" @on:click="${(event) => selectThumb(event)}"><img src="assets/parrot.jpg" height="100%"/></div>
                <div class="thumb" @on:click="${(event) => selectThumb(event)}"><img src="assets/parrot.jpg" height="100%"/></div>
            </div>
            <div id="main-image">
                
            </div>
            <div id="mobile-image"></div>
        </div>
        <div id="inline-content">
            Main Content 
        </div>
    </div>

    `;

}