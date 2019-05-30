// ==UserScript==
// @name          Better Twitch
// @copyright     qligier 2019
// @author        https://github.com/qligier/
// @version       1.0.2
// @updateURL     https://raw.githubusercontent.com/qligier/userscripts/master/better_twitch.js
// @match         https://www.twitch.tv/*
// @grant         none
// @run-at        document-end
// ==/UserScript==

const stylesheetContent = `
/* Hide unwanted elements */
.top-nav__prime, /* Prime button from topbar */
.top-nav__menu a[href^="https://twitch.amazon.com/prime/"], /* Prime link from topbar navigation */
.top-nav__menu a[href^="https://www.twitch.tv/prime"], /* Prime link from topbar navigation */
.extension-taskbar-card-container, /* Prime card in player */
.extension-overlays, /* Prime card in player */
button[aria-label="Subscribe"], /* Subscribe button */
button[data-a-target="top-nav-get-bits-button"], /* Get Bits button in topnav */
.side-nav /* Sidebar */
{
  display: none!important;
}

/* Make the topbar smaller */
.top-nav { height: 3.6rem!important; }
.tw-pd-1 { padding: 0.3rem 1rem!important; }
.tw-pd-y-1 { padding-top: 0.2rem!important; }
`;

(function () {
  const stylesheet = document.createElement('style');
  stylesheet.innerHTML = stylesheetContent;
  document.body.appendChild(stylesheet);
})();
