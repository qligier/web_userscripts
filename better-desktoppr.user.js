// ==UserScript==
// @name         Better Desktoppr
// @author       https://github.com/qligier/
// @namespace    qligier
// @version      20190522
// @updateURL    https://raw.githubusercontent.com/qligier/web_userscripts/master/better-desktoppr.user.js
// @match        https://www.desktoppr.co/wallpapers/*
// @grant        none
// ==/UserScript==

/**
 * This userscript is updated from GitHub.
 */

(function() {
  'use strict';

  const imgPreviewTag = document.querySelector('#image img');
  window.location = imgPreviewTag.getAttribute('src').replace('/preview_', '/');
})();
