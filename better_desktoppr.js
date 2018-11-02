// ==UserScript==
// @name         Better Desktoppr
// @namespace    qligier
// @version      1.0.0
// @author       https://github.com/qligier/
// @updateURL    https://raw.githubusercontent.com/qligier/userscripts/master/better_desktoppr.js
// @match        https://www.desktoppr.co/wallpapers/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const imgPreviewTag = document.querySelector('#image img');
    window.location = imgPreviewTag.getAttribute('src').replace('/preview_', '/');
})();
