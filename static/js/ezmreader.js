/*

    HTML5 Reader for Electric Zine Maker, made by Jeremy Oduber & contributors 2019-2021    
    v21.5
    Me:
        https://twitter.com/JeremyOduber
    This:
        https://jeremyoduber.itch.io/js-zine
    Electric Zine Maker: 
        https://alienmelon.itch.io/electric-zine-maker
    GitHub:
        https://github.com/jeremyoduber/EZM-Reader
    Licensed under the MIT License:
        https://github.com/jeremyoduber/EZM-Reader/blob/main/LICENSE
    
*/

//---- USER OPTIONS ----//
const BGCOLOR = '#f5f5f5'; // Change this hex value to set the background color. Remember to keep the quotes!
const ALT = 'Reader for Electric Zine Maker'; // Change this to a plaintext copy or description of your content to make it visible to screen-readers
const SMOOTH = true; // Set to false if you want crispy pixels. Leave true if you like the blur.

//---- END USER OPTIONS ----//

// Setup constants and variables
const FOV = 45;
const LOADING_OVERLAY = document.querySelector('#loading');
let card_amount;
let current_state = 0;
let textures = [];
let pages = [];
let currentZineData = null;

// Find the zine container or use body as fallback
const ZINE_CONTAINER = document.querySelector('.zine-container') || document.body;
ZINE_CONTAINER.style.background = BGCOLOR;
ZINE_CONTAINER.ariaLabel = ALT;
if (SMOOTH) {
    ZINE_CONTAINER.style.imageRendering = 'auto';
} else {
    ZINE_CONTAINER.style.imageRendering = 'pixelated';
}
const metaTheme = document.createElement('meta');
metaTheme.name = 'theme-color';
metaTheme.content = BGCOLOR;
document.head.appendChild(metaTheme);

function getTextures(zineData) {
    const basePath = `/static/${zineData.images_folder}/`;
    return zineData.pages.map(page => basePath + page);
}

function getTemplateInfo(template) {
    const templates = {
        1: { card_amount: 4, pageCount: 5 },
        2: { card_amount: 6, pageCount: 9 },
        3: { card_amount: 7, pageCount: 11 },
        4: { card_amount: 8, pageCount: 13 },
        5: { card_amount: 12, pageCount: 21 },
        6: { card_amount: 13, pageCount: 23 },
        7: { card_amount: 16, pageCount: 29 },
        8: { card_amount: 32, pageCount: 61 }
    };
    return templates[template] || templates[1];
}

// Initialize zine reader with data
function initZineReader(zineId, zinesData) {
    const zine = zinesData.find(z => z.id === zineId);
    if (!zine) {
        console.error('Zine not found:', zineId);
        return;
    }
    
    currentZineData = zine;
    const templateInfo = getTemplateInfo(zine.template);
    card_amount = templateInfo.card_amount;
    textures = getTextures(zine);
    
    loadZine();
}

function switchZineReader(zineId, zinesData) {
    // Clear existing content
    const existingList = ZINE_CONTAINER.querySelector('ul');
    if (existingList) {
        existingList.remove();
    }
    
    // Reset state
    current_state = 0;
    pages = [];
    
    // Initialize with new zine
    initZineReader(zineId, zinesData);
}

function loadZine() {
    if (!currentZineData) {
        console.error('No zine data available');
        return;
    }

    // Preloader
    Promise.all(
        textures.map(
            src =>
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    img.src = src;
                    img.alt = src.split('/').pop().split('.')[0];
                })
        )
    )
        .then(imgs => {
            LOADING_OVERLAY.remove();
            const list = document.createElement('ul');
            list.ariaHidden = true;
            pages = imgs.map((img, idx) => {
                const li = document.createElement('li');
                const flip = idx % 2;
                li.className = 'depth-' + Math.min(2, idx);
                li.style.transform = 'translateX(100%) rotateY(0deg) scaleZ(' + (flip ? -1 : 1) + ')';
                li.appendChild(img);
                list.appendChild(li);
                return li;
            });
            ZINE_CONTAINER.appendChild(list);

            function updatePerspective() {
                const w = window.innerWidth;
                const h = window.innerHeight;
                list.style.perspective = Math.sqrt(((w / 2) * w) / 2 + ((h / 2) * h) / 2) / Math.tan(((FOV / 2) * Math.PI) / 180) + 'px';
            }

            window.addEventListener('resize', updatePerspective);
            updatePerspective();
        })
        .catch(error => {
            console.error(error);
            LOADING_OVERLAY.textContent = 'Something went wrong! Make sure your images are in the correct folder! See console for details.';
        });
}

// Keyboard input
document.addEventListener('keyup', function onKeyUp(key) {
    if (key.key === 'ArrowLeft' || key.key === 'a') {
        flipLeft();
    } else if (key.key === 'ArrowRight' || key.key === 'd') {
        flipRight();
    }
});

// Mouse input
document.addEventListener('pointerup', function onPointerUp(event) {
    if (event.button !== 0) return;
    if (event.clientX < window.innerWidth / 2) {
        flipRight();
    } else {
        flipLeft();
    }
});

function getPages(state) {
    return [pages[state * 2], pages[state * 2 + 1]].filter(i => i);
}
function replaceTransformPerPage(state, search, replace) {
    getPages(state).forEach(page => {
        page.style.transform = page.style.transform.replace(search, replace);
    });
}
function setDepth(state, depth) {
    getPages(state).forEach(page => {
        page.className = page.className.replace(/depth-\d+/, 'depth-' + Math.min(depth, 2));
    });
}

// Flip page left
function flipLeft() {
    if (current_state >= card_amount) return;
    replaceTransformPerPage(current_state, '0deg', '-180deg');
    setDepth(current_state - 1, 1);
    setDepth(current_state - 2, 2);
    setDepth(current_state + 1, 0);
    setDepth(current_state + 2, 1);
    ++current_state;
}

// Flip page right
function flipRight() {
    if (current_state <= 0) return;
    replaceTransformPerPage(current_state - 1, '-180deg', '0deg');
    setDepth(current_state - 3, 1);
    setDepth(current_state - 2, 0);
    setDepth(current_state + 1, 2);
    setDepth(current_state, 1);
    --current_state;
}

// Expose functions globally
window.initZineReader = initZineReader;
window.switchZineReader = switchZineReader;
