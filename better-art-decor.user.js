// ==UserScript==
// @name        Better Art-Decor
// @author      https://github.com/qligier/
// @namespace   qligier
// @version     20220115
// @updateURL   https://raw.githubusercontent.com/qligier/web_userscripts/master/better-art-decor.user.js
// @match       http://art-decor.org/*
// @match       https://art-decor.org/*
// @grant       none
// ==/UserScript==

/**
 * This userscript is updated from GitHub.
 */

const stylesheetContent = `
tr.cancelled {
  opacity: 0.4;
}
`;

(function () {
  // Add stylesheet to document
  const stylesheet = document.createElement('style');
  stylesheet.innerHTML = stylesheetContent;
  document.body.appendChild(stylesheet);

  document.querySelectorAll('table#valueSetList tr').forEach(row => {
    const status = row.querySelector('td:nth-child(10)')
    if (status) {
      switch (status.innerText) {
        case 'Cancelled':
          row.classList.add('cancelled')
          break;
      }
    }
  })

  document.querySelectorAll('table#templatesList tr').forEach(row => {
    const status = row.querySelector('td:nth-child(9)')
    console.log(status)
    if (status) {
      switch (status.innerText) {
        case 'Cancelled':
          row.classList.add('cancelled')
          break;
      }
    }
  })
})()