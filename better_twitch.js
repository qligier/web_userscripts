// ==UserScript==
// @name          Better Twitch
// @copyright     qligier 2018
// @author        https://github.com/qligier/
// @version       1.0.1
// @updateURL     https://raw.githubusercontent.com/qligier/userscripts/master/better_twitch.js
// @match         https://www.twitch.tv/*
// @grant         none
// @run-at        document-end
// ==/UserScript==

let stylesheetContent = `
/* Remove Prime button from topbar */
.top-nav__prime {
    display: none;
}

/* Remove Prime link from topbar navigation */
.top-nav__menu a[href^="https://twitch.amazon.com/prime/"] {
    display: none;
}

/* Remove Prime card from player */
.extension-taskbar-card-container,
.extension-overlays {
    display: none;
}
`;

(function () {

    // Create a stylesheet for simple modifications
    let stylesheet = document.createElement('style');
    stylesheet.innerHTML = stylesheetContent;
    document.body.appendChild(stylesheet);

    // Remove bits dropdown from topbar
    document.querySelectorAll('.top-nav__menu .tw-align-self-center').forEach(
        topbarNode => {
            if (topbarNode.textContent === 'Get Bits') {
                topbarNode.parentNode.removeChild(topbarNode);
            }
        }
    );
}
)();
