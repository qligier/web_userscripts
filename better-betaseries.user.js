// ==UserScript==
// @name          Better Betaseries
// @author        https://github.com/qligier/
// @namespace     qligier
// @version       20220115
// @updateURL     https://raw.githubusercontent.com/qligier/web_userscripts/master/better-betaseries.user.js
// @match         https://www.betaseries.com/membre/*/series
// @grant         none
// @run-at        document-end
// ==/UserScript==

/**
 * This userscript is updated from GitHub.
 */

const stylesheetContent = `
#member_shows .progressBar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #f1f8fe;
  border-right: 1px solid #eeeeee;
  z-index: -1;
}
.last {
  color: #6280b1;
}
`;

(function () {
  // Add stylesheet to document
  const stylesheet = document.createElement('style');
  stylesheet.innerHTML = stylesheetContent;
  document.body.appendChild(stylesheet);

  // Add progress bar to current series
  document.querySelectorAll('#member_shows .showItem').forEach(
    serieNode => {
      let progress = '0%';
      const statsNode = serieNode.querySelector('.last');
      if (statsNode) {
        progress = statsNode.textContent.replace(' ', '');
      }
      const progressBar = document.createElement('div');
      progressBar.style.width = progress;
      progressBar.classList.add('progressBar');
      serieNode.prepend(progressBar);
    }
  );

  // Count series in each category
  document.querySelector('.maincontent h1:nth-of-type(1)').innerText += ` (${document.querySelectorAll('#member_shows .showItem').length} séries)`;
  document.querySelector('.maincontent h1:nth-of-type(2)').innerText += ` (${document.querySelectorAll('#member_archives .showItem').length} séries)`;
  document.querySelector('.maincontent h1:nth-of-type(3)').innerText += ` (${document.querySelectorAll('#member_archives_nonstarted .showItem').length} séries)`;
  //document.querySelector('.maincontent h1:nth-of-type(4)').innerText += ` (${document.querySelectorAll('#member_archives_ended .showItem').length} séries)`;
  document.querySelector('.maincontent sapn h1').innerText += ` (${document.querySelectorAll('#member_archives_ended .showItem').length} séries)`;
}
)();
