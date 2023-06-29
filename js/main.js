import Modal from "./modules/Modal.js";
import Map from "./modules/Map.js";
import validationForm from './modules/validation.js';
import inputMasks from './modules/masks.js';
import lazyload from './modules/lazyload.js';

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // activate transition:
    setTimeout(() => {
        body.classList.remove('preload');
    }, 500);

    // inits modals:
    const modal = new Modal({
        isOpen: (modal) => {
            console.log('open modal');
        },
        isClose: (modal) => {
            console.log('close modal');
        },
    });

    // inits map: 
    if(!document.getElementById('yamapsId')) {
        return;
    } else {
        const map = new Map('yamapsId', {
            // map center:
            center: [55.77, 49.15],
            // map zoom value:
            zoom: 14,
            // placemarks:
            coords: [
                [55.767398, 49.150961]
            ],
            // map control elements:
            controls: [
    
            ]
        })
    }

    validationForm();
    inputMasks();

    // lazyload for images, videos, iframes and objects:
    lazyload();
})
