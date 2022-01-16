// ==UserScript==
// @name        SciHubInjector 
// @author      https://github.com/qligier/
// @namespace   qligier
// @updateURL   https://raw.githubusercontent.com/qligier/web_userscripts/master/scihub-injector.user.js
// @version     20220116
// @match       https://pubmed.ncbi.nlm.nih.gov/*
// @match       https://www.nature.com/*
// @match       https://www.tandfonline.com/*
// @match       https://www.sciencedirect.com/*
// @match       http://www.eurekaselect.com/*
// @match       https://www.science.org/*
// @match       https://dom-pubs.onlinelibrary.wiley.com/doi/*
// @grant       none
// ==/UserScript==

/**
 * Based on https://github.com/rickwierenga/sci-hub-injector
 */

function sciHubLink(doi) {
  return `https://sci-hub.se/${doi}`;
}

function pubMed() {
  const doi = document.querySelector(".identifier.doi > a").innerText;
  const links = document.querySelector(".full-text-links-list");
  links.innerHTML += `
  <a class="link-item dialog-focus" href="${sciHubLink(
    doi
  )}" target="_blank" rel="noopener" title="See full text on SciHub"><img src="https://sci-hub.se/misc/img/logo_en.png" alt="full text provider logo"><span class="text">SciHub</span></a>
  `;
}

function nature() {
  const doi = document
    .querySelector(
      ".c-bibliographic-information__list-item--doi > p > span.c-bibliographic-information__value"
    )
    .textContent.split(".org/")[1];
  const menu = document.querySelector(
    "aside .c-nature-box.c-nature-box--side.u-hide-print"
  );
  menu.innerHTML += `
	<div class="js-access-button">
			<a href="${sciHubLink(doi)}" class="c-article__button">
				<img class="u-icon" width="18" height="18" aria-hidden="true" focusable="false" src="https://sci-hub.se/misc/img/ravenround.gif" />
				<span class="c-article__button-text" style="margin-left: 8px;">Access on SciHub</span>
			</a>
	</div>
	`;
}

function taylorFrancis() {
  const doi = document
    .querySelector(".dx-doi > a")
    .textContent.split(".org/")[1];
  const menu = document.querySelector(".tab-nav");
  menu.innerHTML += `
  <li role="tab" aria-selected="false" aria-expanded="false">
    <a class="grant-access" href="${sciHubLink(doi)}">
      Access on SciHub
    </a>
  </li>
	`;
}

function sciencedirect() {
  // Add timeout to prevent them from removing the link...
  setTimeout(() => {
    const doi = document.querySelector(".doi").textContent.split(".org/")[1];
    const menu = document.querySelector(".toolbar-buttons > ul");
    menu.innerHTML += `
    <li class="PrimaryCtaButton" id="PrimaryCtaButton">
    <a
      class="link-button link-button-primary accessbar-primary-link"
      role="button"
      rel="nofollow"
      href="${sciHubLink(doi)}"
      >
      <img width="24" height="24" src="https://sci-hub.se/misc/img/ravenround.gif" /> 
      <span class="link-button-text">Access on&nbsp;<strong>SciHub</strong></span></a
    >
  </li>
`;
  }, 1000);
}

function eurekaSelect() {
  const doiLinks = Array.from(document.querySelectorAll("a"))
    .filter((a) => a.href.includes("doi.org"))
    .map((a) => a.href);
  const doi = doiLinks[0].split(".org/")[1];
  const form = document.getElementById("addtocartForm");
  form.innerHTML += `
  <div class="col-md-4 text-right">
    <a href="${sciHubLink(doi)}" class="btn btn-download hvr-icon-hang">
    View on SciHub
    <img width="24" height="24" src="https://sci-hub.se/misc/img/ravenround.gif" /> 
    </a>
  </div>
  `;
}

function science() {
  const doiLinks = Array.from(document.querySelectorAll("a"))
    .filter((a) => a.href.includes("doi.org"))
    .map((a) => a.href);
  const doi = doiLinks[0].split(".org/")[1];
  const menu = document.querySelector(".info-panel__formats.info-panel__item");
  menu.innerHTML += `
  <a
    href="${sciHubLink(doi)}"
    data-toggle="tooltip"
    title=""
    class="btn btn__request-access ml-1"
    data-original-title="GET ACCESS"
    ><img width="24" height="24" src="https://sci-hub.se/misc/img/ravenround.gif" class="mr-2" /> <span>get free access</span></a
  >
  `;
}

function wiley() {
  const doiLinks = Array.from(document.querySelectorAll("a"))
    .filter((a) => a.href.includes("doi.org"))
    .map((a) => a.href);
  const doi = doiLinks[0].split(".org/")[1];
  const menu = document.querySelector(".coolBar__second.rlist");
  menu.innerHTML += `
  <div class="coolBar__section coolBar--download PdfLink cloned">
    <a href="${sciHubLink(
      doi
    )}" title="SciHub" class="coolBar__ctrl pdf-download"
      ><img
        src="https://sci-hub.se/misc/img/ravenround.gif"
        alt="SciHub Logo"
      />
      Access on SciHub
    </a>
  </div>
  `;
}

function addSciHubLink() {
  const url = document.location.href;
  if (url.includes("pubmed.ncbi.nlm.nih.gov")) {
    pubMed();
  } else if (url.includes("nature.com")) {
    nature();
  } else if (url.includes("tandfonline.com")) {
    taylorFrancis();
  } else if (url.includes("www.sciencedirect.com")) {
    sciencedirect();
  } else if (url.includes("eurekaselect.com")) {
    eurekaSelect();
  } else if (url.includes("science.org")) {
    science();
  } else if (url.includes("wiley.com")) {
    wiley();
  }
}

addSciHubLink();
