// ==UserScript==
// @name        Better Strava
// @author      https://github.com/qligier/
// @namespace   qligier
// @version     20230307
// @updateURL   https://raw.githubusercontent.com/qligier/web_userscripts/master/better-strava.user.js
// @match       https://www.strava.com/activities/*/edit
// @grant       none
// ==/UserScript==

/**
 * This userscript is updated from GitHub.
 */

(function() {
  'use strict';

  //https://www.strava.com/activities/123/edit
  if (window.location.href.match(/https:\/\/www\.strava\.com\/activities\/\d+\/edit/g)) {
    improveEditPage()
  }
})();

function improveEditPage() {
  // Nodes of the page
  const nameField = document.querySelector('input[name="activity[name]"]')
  const shoeField = document.querySelector('select[name="activity[athlete_gear_id]"]')

  // New nodes
  const nameSuggestionsNode = document.createElement('p')
  nameField.parentNode.insertBefore(nameSuggestionsNode, nameField.nextSibling)

  const names = ['Arve Acacias-Sierne', 'Rhône Acacias-Evaux', 'Aire Acacias-Lully', 'Bout-du-Monde intervalles', 'Grimpe - bloc', 'HIIT', 'Workout']
  for (let index in names) {
    const nameSuggestionNode = document.createElement('span')
    nameSuggestionNode.innerText = names[index]
    nameSuggestionNode.style = 'color: #007FB6; cursor: pointer; margin-right: 15px; font-size: 0.9em;'
    nameSuggestionNode.onclick = () => {
      nameField.value = names[index]
      document.querySelector('input[name="activity[visibility]"][value="everyone"]').checked = true
      if (index < 4) {
        shoeField.value = '12740691'
      }
    }
    nameSuggestionsNode.appendChild(nameSuggestionNode)
  }
}
