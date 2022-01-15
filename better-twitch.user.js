// ==UserScript==
// @name          Better Twitch
// @author        https://github.com/qligier/
// @namespace     qligier
// @version       20190802
// @updateURL     https://raw.githubusercontent.com/qligier/web_userscripts/master/better-twitch.user.js
// @match         https://www.twitch.tv/*
// @grant         none
// @run-at        document-end
// ==/UserScript==

/**
 * This userscript is updated from GitHub.
 */

const stylesheetContent = `
/* Hide unwanted elements */
.top-nav__prime, /* Prime button from topbar */
.top-nav__menu a[href^="https://twitch.amazon.com"], /* Prime link from topbar navigation */
.top-nav__menu a[href^="https://www.twitch.tv/prime"], /* Prime link from topbar navigation */
.extension-taskbar-card-container, /* Prime card in player */
.extension-overlays, /* Prime card in player */
.extensions-video-overlay-size-container, /* Overlay in player */
.extensions-dock-card, /* Overlay in player */
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
