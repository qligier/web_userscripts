// ==UserScript==
// @name          Better Betaseries
// @copyright     qligier 2018
// @author        https://github.com/qligier/
// @version       1.0.0
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
    background: #f3faff;
    z-index: -1;
}
.last {
    color: #6280b1;
}
`;

(function () {
    let stylesheet = document.createElement('style');
    stylesheet.innerHTML = stylesheetContent;
    document.body.appendChild(stylesheet);

    document.querySelectorAll('#member_shows .showItem').forEach(
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
}
)();
