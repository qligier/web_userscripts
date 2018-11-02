// ==UserScript==
// @name         Better InterfaceLIFT
// @namespace    qligier
// @version      1.0.0
// @updateURL    https://raw.githubusercontent.com/qligier/userscripts/master/better_interfacelift.js
// @author       https://github.com/qligier/
// @match        https://interfacelift.com/wallpaper/details/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const resolutionSelectTag = document.querySelector('select[name="resolution"]');
    const downloadTag = document.querySelector('div[id^="download_"] a');

    let maxPixels = 0;
    let maxDimension = '';
    for (let i=0; i < resolutionSelectTag.options.length; i++) {
        const option = resolutionSelectTag[i];
        if (option.label.match(/^[0-9]+x[0-9]+/)) {
            const dimensions = option.label.split(' ')[0].split('x');
            const nbPixels = dimensions[0] * dimensions[1];
            if (nbPixels > maxPixels) {
                maxPixels = nbPixels;
                maxDimension = dimensions[0] + 'x' + dimensions[1];
            }
        }
    }

    const oldDownloadURL = downloadTag.getAttribute('href');
    const newDownloadURL = oldDownloadURL.replace(/[0-9]+x[0-9]+\.jpg/, maxDimension + '.jpg');

    window.location = newDownloadURL;
})();
