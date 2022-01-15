// ==UserScript==
// @name         Better InterfaceLIFT
// @author       https://github.com/qligier/
// @namespace    qligier
// @version      20190522
// @updateURL    https://raw.githubusercontent.com/qligier/web_userscripts/master/better-interfacelift.user.js
// @match        https://interfacelift.com/wallpaper/details/*/*
// @grant        none
// ==/UserScript==

/**
 * This userscript is updated from GitHub.
 */

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
