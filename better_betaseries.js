// ==UserScript==
// @name          Better Betaseries
// @copyright     qligier 2018
// @author        https://github.com/qligier/
// @version       1.0.1
// @updateURL     https://raw.githubusercontent.com/qligier/userscripts/master/better_betaseries.js
// @match         https://www.betaseries.com/membre/*/series
// @grant         none
// @run-at        document-end
// ==/UserScript==

let stylesheetContent = `
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
let queryAll = s => document.querySelectorAll(s),
    queryOne = s => document.querySelector(s);

(function () {
    // Add stylesheet to document
    let stylesheet = document.createElement('style');
    stylesheet.innerHTML = stylesheetContent;
    document.body.appendChild(stylesheet);

    // Add progress bar to current series
    queryAll('#member_shows .showItem').forEach(
        serieNode => {
            let progress = '0%';
            let statsNode = serieNode.querySelector('.last');
            if (statsNode) {
                progress = statsNode.textContent.replace(' ', '');
            }
            let progressBar = document.createElement('div');
            progressBar.style.width = progress;
            progressBar.classList.add('progressBar');
            serieNode.prepend(progressBar);
        }
    );
  
    // Count series in each category
    queryOne('.maincontent h1:nth-of-type(1)').innerText += ` (${queryAll('#member_shows .showItem').length} séries)`;
    queryOne('.maincontent h1:nth-of-type(2)').innerText += ` (${queryAll('#member_archives .showItem').length} séries)`;
    queryOne('.maincontent h1:nth-of-type(3)').innerText += ` (${queryAll('#member_archives_nonstarted .showItem').length} séries)`;
    queryOne('.maincontent h1:nth-of-type(4)').innerText += ` (${queryAll('#member_archives_ended .showItem').length} séries)`;
}
)();
