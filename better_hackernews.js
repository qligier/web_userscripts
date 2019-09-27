// ==UserScript==
// @name          Better Hacker News
// @copyright     qligier 2018
// @author        https://github.com/qligier/
// @version       1.0.1
// @updateURL     https://raw.githubusercontent.com/qligier/userscripts/master/better_hackernews.js
// @match         https://news.ycombinator.com/*
// @grant         none
// @run-at        document-end
// ==/UserScript==

let stylesheetContent = `
body {
    margin: 0;
}
body > center > table {
    background-color: transparent;
    width: 100%;
}
.comment p, .comment + p {
    line-height: 16px;
    margin: 8px 0 0 0;
}
.comment u, .comment u a, .comment u a:visited, .comment + p u, .comment + p u a, .comment + p u a:visited {
    color: #777;
    text-decoration: none ;
}
.pagetop {
    font-size: 14px;
}
.subtext {
    font-size: 11px;
    height: 20px;
    vertical-align: top;
}
.title {
    color: #ccc;
    font-size: 14px;
}
a {
    text-decoration: none;
    color: #000000;
}
a:hover {
    text-decoration: underline;
}
body > center > table > tbody > tr > td > table {
    margin: 0 auto;
    width: 960px;
}
body > center > table > tbody > tr:first-child > td {
    background-image: -webkit-linear-gradient(top, #f60, #f70);
    border-bottom: solid 1px #f60;
    box-shadow: 0 2px rgba(0,0,0,.1);
}
body > center > table > tbody > tr:first-child > td > table {
    margin: 0 auto;
    padding: 7px !important;
    width: 960px;
}
body > center > table > tbody > tr:first-child > td > table > tbody > tr > td:first-child {
    padding-right: 10px;
}
body > center > table > tbody > tr:nth-child(3) > td {
    padding: 10px 0;
}
body > center > table > tbody > tr:nth-child(3) > td > form {
    margin: 0 auto;
    width: 960px;
}
body > center > table > tbody > tr:nth-child(3) > td > table {
    margin: 0 auto;
    width: 960px;
}
td > center > table {
    background-color: white;
    border: solid 1px #000;
    width: 940px;
}
td > center > table td {
    padding: 10px;
}
td.title a {
    text-decoration: none;
    color: #252525;
}
td.title a:visited {
    color: #989898;
}
.rank {
    color: #ff7100;
}
.age {
    margin-left: 8px;
}
.comment {
    border-left: 3px solid #e8e8e8;
    padding-left: 8px;
}
.comment:hover {
    border-color: #ff6e00;
}
.comment pre {
    background: #fdf3ed;
}
.comment-tree {
    border-left: 6px solid #f7f7f7;
}
`;

(function () {
    let stylesheet = document.createElement('style');
    stylesheet.innerHTML = stylesheetContent;
    document.body.appendChild(stylesheet);
}
)();
